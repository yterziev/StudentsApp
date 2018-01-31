import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'


import createBrowserHistory from 'history/createBrowserHistory';
import {browserHistory} from 'react-router';
 
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './home'
import List from './list'

const history = createBrowserHistory();

const Root = ({ store }) => (
  <HashRouter>
  <Provider store={store} history={browserHistory}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list"  component={List} />
      </Switch>
    </Router>
  </Provider>
  </HashRouter>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root



// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import allReducers from './reducers';
// import {Provider} from 'react-redux';
// import createBrowserHistory from 'history/createBrowserHistory';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {browserHistory} from 'react-router';
// import Routes from './pages/Routes';

// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//     allReducers, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// /* eslint-enable */

// const app = document.getElementById('app');
// const history = createBrowserHistory();

// store.subscribe(() => {
//     console.log('store changed', store.getState());
// });

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path='/' component={Routes} />
//         </Router>
//     </Provider>,
//     app);
