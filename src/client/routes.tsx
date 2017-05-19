import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import { Layout, Home, Portfolio, Project, Clients, Contact } from 'features';
import client from './apolloClient';
import store, { history } from './store';
import colors from './theming';

import ReactGA from 'react-ga';

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-89939143-1');
}

const logPage = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

export const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/case-studies" component={Portfolio} />
    <Route path="/case-study/:id" component={Project} />
    <Route path="/contact" component={Contact} />
    <Route path="/clients" component={Clients} />
    <Route path="*" component={Home} />
  </Route>
);

const RouterApp = () => (
  <ApolloProvider store={store} client={client}>
    <ThemeProvider theme={colors}>
      <ReactRouter
        onUpdate={logPage}
        history={history}
        routes={routes}
      />
    </ThemeProvider>
  </ApolloProvider>
);

export default RouterApp;
