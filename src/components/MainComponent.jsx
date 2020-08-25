import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
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

        const AnnWithId = ({match}) => {
            return (
                <AnnouncementDetail ann={this.state.announcements.filter((ann) => ann.ID === parseInt(match.params.annId, 10))[0]} />
            );
        }

        return (
            <div>
                <Header announcements={this.state.announcements}/>
                <Switch>
                    <Route path="/home" component={() => <Home announcements={this.state.announcements} /> } />
                    <Route path="/announcement/:annId" component={AnnWithId} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
