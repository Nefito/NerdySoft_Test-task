import React, { Component } from 'react';
import Header from './HeaderComponent';
import AnnouncementDetail from './AnnouncementDetail';
import { ANNOUNCEMENTS } from '../shared/announcements';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            announcements: ANNOUNCEMENTS,
        };
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={() => <Header /> } />
                    <Route path="/announcement/:annId" component={AnnouncementDetail} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
