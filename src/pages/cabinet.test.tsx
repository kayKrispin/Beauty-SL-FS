import React from 'react';
import { render } from '../helpers/testUtlis';
import CabinetPage from './cabinet';

describe(`CabinetPage`, () => {
  it(`should render the cabinet page component`, () => {
    render(<CabinetPage />);
  });
});
