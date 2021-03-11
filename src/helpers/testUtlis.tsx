// test-utils.js
import { render as rtlRender } from '@testing-library/react';
import { SWRConfig } from 'swr';
import { Provider } from 'next-auth/client';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import '@testing-library/jest-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { swrFetcher } from '../api';

export const SWRWrapper = ({ children }: { children?: React.ReactNode }) => (
  <SWRConfig
    value={{
      fetcher: swrFetcher,
      refreshInterval: 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }}
  >
    {children}
  </SWRConfig>
);

// Render with router
function render(ui: React.ReactElement) {
  const Wrapper = ({ children }: { children?: React.ReactNode }) => (
    <Provider
      session={{
        expires: `1`,
        user: { email: `tarasbashunryn@gmail.com`, name: `Delta`, image: `c` },
      }}
    >
      <SWRWrapper>
        <RouterContext.Provider value={{ ...mockRouter }}>
          {children}
        </RouterContext.Provider>
      </SWRWrapper>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper });
}

// Render with router and form
function renderForm(
  ui: React.ReactElement,
  { initialState = {}, defaultValues = {}, ...renderOptions } = {},
) {
  const Wrapper = ({ children }: { children?: React.ReactNode }) => {
    const methods = useForm({ defaultValues });

    return (
      <Provider
        session={{
          expires: `1`,
          user: {
            email: `tarasbashunryn@gmail.com`,
            name: `Delta`,
            image: `c`,
          },
        }}
      >
        {` `}
        <RouterContext.Provider value={{ ...mockRouter }}>
          <SWRWrapper>
            <FormProvider {...methods}>{children}</FormProvider>
          </SWRWrapper>
        </RouterContext.Provider>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const mockRouter: NextRouter = {
  basePath: ``,
  pathname: `/`,
  route: `/`,
  asPath: `/`,
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
// re-export everything
export * from '@testing-library/react';

// override render method
export { render, renderForm };
