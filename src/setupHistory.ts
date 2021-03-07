import { createBrowserHistory, History } from 'history';

let history = null;

// SSR part
if (typeof window === `undefined`) {
  history = {
    location: {
      pathname: ``,
      state: {},
    },
  };
}
// Client side part
else {
  history = createBrowserHistory();
}

export default history as History;
