import React from 'react';
import { renderForm } from '../../../helpers/testUtlis';
import Input from './Input';

describe(`Input`, () => {
  it(`should render the Input`, () => {
    renderForm(<Input label="" name="test" />);
  });

  it(`should render the Input classlist`, () => {
    const { container } = renderForm(<Input label="" name="test" />);

    const el = container.querySelector(`div`);

    expect(el.classList.contains(`slInput`)).toBeTruthy();
  });

  it(`should render the TimePicker main text`, () => {
    const { getByText } = renderForm(<Input label="test" name="test" />);

    const el = getByText(`test`);

    expect(el).toBeTruthy();
  });
});
