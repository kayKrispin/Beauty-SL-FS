import React from 'react';
import { render } from '../../helpers/testUtlis';
import HomePage from './Home';

describe(`HomePage`, () => {
  it(`should render the home page`, () => {
    render(<HomePage providers={{} as any} />);
  });

  it(`should render the home page main container`, () => {
    const { container } = render(<HomePage providers={{} as any} />);

    const el = container.querySelector(`div`);

    expect(el.classList.contains(`homeContainer`)).toBeTruthy();
  });
});
