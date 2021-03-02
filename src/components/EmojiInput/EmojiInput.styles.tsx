import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  .input-cp {
    padding-left: 48px;
  }
`

export const EmojiWrapper = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Emoji = styled.span`
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: scale(1.2);
  }
`

export const Dialog = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0deg 0% 100% / 70%);
`