import validator from 'validator';

type Input = {
  name: string,
  method: Function
  validWhen: boolean
  message: string
}

type Error = {
  isInvalid: boolean
  message: string
}

type Validation = {
  isValid: boolean
  errors: ErrorList
}

class ErrorList {
  data: any = {};

  isValid (): boolean {
    return Object.keys(this.data).length === 0
  }

  set (name: string, error: Error): void {
    this.data[name] = error;
  }

  get (name: string): Error {
    return this.data[name] || { isInvalid: false, message: '' }
  }
}

class FormValidator {
  inputs: Input [] = [];

  constructor (inputs:  Input []) {
    this.inputs = inputs;
  }
  
  validate(values : any): Validation {
    const errors = new ErrorList()

    for (let input of this.inputs) {
      if (input.method(values[input.name]) !== input.validWhen) {
        errors.set(input.name, {
          isInvalid: true,
          message: input.message
        })
      }
    }

    return {
      isValid: errors.isValid(),
      errors
    }
  }

  reset () : ErrorList {
    return new ErrorList()
  }
}

const createForm = (inputs:  Input []) => new FormValidator(inputs);

const Validator = {
  ...validator,
  createForm
}

export default Validator
