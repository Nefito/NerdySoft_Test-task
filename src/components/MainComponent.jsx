import React from 'react';
import {AnnouncementDetail} from '../Announcement';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home} from '../Home';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" component={() => <Home /> } />
                <Route path="/announcement/:annId" component={AnnouncementDetail} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default Main;
