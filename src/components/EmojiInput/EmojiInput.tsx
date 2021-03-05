import React, { useState } from 'react';
import * as style from './EmojiInput.styles'
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

type EmojiInputProps = {
  label?: string,
  value: any
  onChange: Function,
  children: any
};

const EmojiInput : React.FC<EmojiInputProps> = ({
  label,
  value,
  onChange,
  children
}) => {
  const [show, setShow] = useState(false);

  const handleSelect = (e : any) => {
    console.log(e)
    onChange(e. unified)
    setShow(false);
  };

  return (
    <style.Wrapper>
      <style.EmojiWrapper>
        <style.Emoji onClick={() => setShow(!show)}>{String.fromCodePoint(parseInt(value, 16))}</style.Emoji>
        { show && <style.Dialog>
          <Picker
            title='Beet in you' emoji='bee'
            native={true}
            showPreview={false}
            useButton={false}
            onSelect={handleSelect}
          />
        </style.Dialog>}
      </style.EmojiWrapper>
      {children}
    </style.Wrapper>
  )
};

export default EmojiInput;