import React from 'react';
import { render } from '../../helpers/testUtlis';
import Button from './Button';

describe(`Button`, () => {
  it(`should render the button`, () => {
    render(<Button label="" />);
  });

  it(`should render the button classlist`, () => {
    const { container } = render(<Button label="" />);

    const el = container.querySelector(`button`);

    expect(el.classList.contains(`slButton`)).toBeTruthy();
  });

  it(`should render the button main text`, () => {
    const { getByText } = render(<Button label="test" />);

    const el = getByText(`test`);

    expect(el).toBeTruthy();
  });
});
