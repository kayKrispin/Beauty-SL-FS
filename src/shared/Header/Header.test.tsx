import React from 'react';
import { render } from '../../helpers/testUtlis';
import Header from './Header';

describe(`Header`, () => {
  it(`should render the home header component`, () => {
    render(<Header />);
  });

  it(`should render the header main container`, () => {
    const { container } = render(<Header />);

    const el = container.querySelector(`header`);

    expect(el.classList.contains(`header`)).toBeTruthy();
  });

  it(`should render the header main text`, () => {
    const { getByText } = render(<Header />);

    const el = getByText(`Sign Out`);

    expect(el).toBeTruthy();
  });
});
