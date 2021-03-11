import React from 'react';
import { renderForm } from '../../../helpers/testUtlis';
import TimePicker from './TimePicker';

describe(`TimePicker`, () => {
  it(`should render the TimePicker`, () => {
    renderForm(<TimePicker label="" name="test" />);
  });

  it(`should render the TimePicker classlist`, () => {
    const { container } = renderForm(<TimePicker label="" name="test" />);

    const el = container.querySelector(`div`);

    expect(el.classList.contains(`slTimePicker`)).toBeTruthy();
  });

  it(`should render the TimePicker main text`, () => {
    const { getByText } = renderForm(<TimePicker label="test" name="test" />);

    const el = getByText(`test`);

    expect(el).toBeTruthy();
  });
});
