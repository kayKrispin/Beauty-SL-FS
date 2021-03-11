import React from 'react';
import { renderForm } from '../../../helpers/testUtlis';
import Select from './Select';

describe(`Select`, () => {
  it(`should render the Select`, () => {
    renderForm(<Select options={[]} label="" name="test" />);
  });

  it(`should render the Select classlist`, () => {
    const { container } = renderForm(<Select options={[]} label="" name="test" />);

    const el = container.querySelector(`div`);

    expect(el.classList.contains(`slSelect`)).toBeTruthy();
  });

  it(`should render the Select main text`, () => {
    const { getByText } = renderForm(<Select options={[]} label="test" name="test" />);

    const el = getByText(`test`);

    expect(el).toBeTruthy();
  });
});
