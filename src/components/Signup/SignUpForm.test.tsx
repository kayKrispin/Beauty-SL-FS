import React from 'react';
import { render } from '../../helpers/testUtlis';
import SignupForm from './SignupForm';
import SignupFormProvider from './SignupFormProvider';

describe(`Sign up form`, () => {
  it(`should render the sign up form`, () => {
    render(
      <SignupForm>
        <div />
      </SignupForm>,
    );
  });

  it(`should render the sign up form main container`, () => {
    const { container, getByText } = render(
      <SignupForm>
        <div />
      </SignupForm>,
    );

    const el = container.querySelector(`div`);
    const elByText = getByText(`Loading...`);

    expect(el).toBeTruthy();
    expect(elByText).toBeTruthy();
  });

  it(`should render the sign up form main container for admin`, () => {
    render(
      <SignupForm isAdmin>
        <div />
      </SignupForm>,
    );
  });

  it(`should render the sign up for providers page`, () => {
    render(<SignupFormProvider providers={{} as any} />);
  });
});
