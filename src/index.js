import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeContextCustom } from './hooks/useBgMode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import store from './store.js';
import { Provider } from 'react-redux';

// lazy loading component
const Main = React.lazy(() => import('./pages/Main'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <React.Suspense fallback={<Loading />}>
          <ThemeContextCustom value="light">
            <Switch>

              <Route exact path="/">
                <Main />
              </Route>

              <Route exact path="/(login|dang-nhap)">
                <Login />
              </Route>

              <Route exact path="/register">
                <Register />
              </Route>

              <ProtectedRoute exact path="/product-detail/:id">
                <ProductDetail />
              </ProtectedRoute>

              <ProtectedRoute exact path="/me">
                <div>My name is Nghia</div>
              </ProtectedRoute>
            </Switch>
          </ThemeContextCustom>
        </React.Suspense>

      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
