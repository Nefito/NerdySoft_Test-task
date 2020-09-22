import React from 'react';
import Header from './HeaderComponent';
import {AnnouncementDetail} from '../Announcement';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = () => {
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

export default Main;
