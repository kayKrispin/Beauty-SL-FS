import React from 'react';

import Header from '../Header/Header';

type Props = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
