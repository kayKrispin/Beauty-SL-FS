import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </Provider>
  );
}
