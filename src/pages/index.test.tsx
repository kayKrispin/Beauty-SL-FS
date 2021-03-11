import React from 'react';
import { render } from '../helpers/testUtlis';
import HomePage from './index';

describe(`HomePage`, () => {
  it(`should render the home page component`, () => {
    render(<HomePage providers={{} as any} />);
  });
});
