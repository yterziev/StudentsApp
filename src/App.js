import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import store from './store';

import Home from './pages/Home';
import Dancho from './pages/Dancho';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <main>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={'/'} component={Home} />
                            <Route exact path={'/dancho'} component={Dancho} />
                        </Switch>
                    </BrowserRouter>
                </main>
            </Provider>
        );
    }
}

export default App;
