import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import LandingPage from './landing-page';

export class App extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage} />
            </div>
        );
    }
}

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect()(App));
