import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Input from '../Input';

describe('<Input />', () => {
  it('renders label text', () => {
    const label = 'Input component';

    render(
      <Input
        label={label}
        value={2}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByTestId('label')).toBeDefined();
  });

  it('will not render the label text', () => {
    render(
      <Input
        value={2}
        onChange={jest.fn()}
      />
    );

    expect(screen.queryByTestId('label')).toBeDefined();
  });

  it('type in input will fire the onChange', () => {
    const handleChange = jest.fn();

    render(
      <Input
        label='Username'
        value=''
        onChange={handleChange}
      />
    );

    const elm = screen.getByRole('textbox');
    userEvent.type(elm, 'Fulano');

    expect(handleChange).toBeCalledTimes(6);
  });
});