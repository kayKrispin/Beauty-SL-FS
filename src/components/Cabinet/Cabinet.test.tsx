import React from 'react';
import { render } from '../../helpers/testUtlis';
import CabinetListItem from './CabinetListItem';
import CabinetList from './CabinetList';
import Cabinet from './Cabinet';

describe(`CabinetListItem`, () => {
  it(`should render the cabinet list item component`, () => {
    render(<CabinetListItem service="{}" />);
  });

  it(`should render default button `, () => {
    const { getByText } = render(<CabinetListItem service="{}" />);
    const badgeEl = getByText(`відмінити запис`);

    expect(badgeEl.classList.contains(`slButton`)).toBeTruthy();
  });

  it(`should render admin section `, () => {
    const { getByText } = render(
      <CabinetListItem service="{}" email="wow@mail.ru" />,
    );

    getByText(`wow@mail.ru`);
  });

  it(`should render list loading `, () => {
    const { getByText } = render(
      <CabinetList mutate={() => {}} services={undefined} />,
    );

    getByText(`Loading...`);
  });

  it(`should render list of servicings `, () => {
    const { container } = render(
      <CabinetList mutate={() => {}} services={[]} />,
    );

    const el = container.querySelector(`.cabinetServiceContainer`);

    expect(el).toBeTruthy();
  });

  it(`should render main cabinet `, () => {
    const { getByText } = render(<Cabinet />);
    const badgeEl = getByText(`Bаші записи`);

    expect(badgeEl.classList.contains(`cabinetTitle`)).toBeTruthy();
  });
});
