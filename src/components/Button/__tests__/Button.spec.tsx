import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from '../Button';

describe('<Button />', () => {
  it('renders button text', () => {
    const btnText = 'Click me!';

    render(
      <Button>{btnText}</Button>
    );

    expect(screen.getByText(btnText)).toBeDefined();
  });

  it('click event will fire', () => {
    const btnText = 'Click me!';
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick}>{btnText}</Button>
    );

    userEvent.click(screen.getByText(btnText));
    expect(handleClick).toBeCalledTimes(1);
  });
});