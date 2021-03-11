import React from 'react';
import { render } from '../../helpers/testUtlis';
import General from './GeneralLayout';
import AuthLayout from './AuthLayout';

describe(`Layouts`, () => {
  it(`should render the general layout`, () => {
    render(
      <General>
        <div />
      </General>,
    );
  });

  it(`should render the auth layout`, () => {
    render(
      <AuthLayout>
        <div />
      </AuthLayout>,
    );
  });
});
