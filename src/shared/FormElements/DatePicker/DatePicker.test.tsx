import React from 'react';
import { renderForm } from '../../../helpers/testUtlis';
import DatePicker from './DatePicker';

describe(`DatePicker`, () => {
  it(`should render the DatePicker`, () => {
    renderForm(<DatePicker label="" name="test" />);
  });

  it(`should render the DatePicker classlist`, () => {
    const { container } = renderForm(<DatePicker label="" name="test" />);

    container.querySelector(`div`);
  });

  it(`should render the DatePicker main text`, () => {
    const { getByText } = renderForm(<DatePicker label="test" name="test" />);

    const el = getByText(`Sat`);

    expect(el).toBeTruthy();
  });
});
