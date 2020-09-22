import React from 'react';
import Header from './HeaderComponent';
import {AnnouncementDetail} from '../Announcement';
import { Switch, Route, Redirect } from 'react-router-dom';
import Search from '../Header/Search';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" component={() => <Search /> } />
                <Route path="/announcement/:annId" component={AnnouncementDetail} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default Main;
