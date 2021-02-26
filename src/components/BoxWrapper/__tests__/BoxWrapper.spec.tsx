import React from 'react';
import { render, screen } from '@testing-library/react';
import BoxWrapper from '../BoxWrapper';

describe('<BoxWrapper />', () => {
  it('renders passed content', () => {
    render(
      <BoxWrapper>
        <h4>Title here</h4>
        <p>This text is a example of text.</p>
      </BoxWrapper>
    );

    expect(screen.getByText(/title/i)).toBeDefined();
    expect(screen.getByText(/text/i)).toBeDefined();
  });
});