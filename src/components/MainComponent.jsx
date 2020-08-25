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

        const AnnWithId = ({match}) => {
            return (
                <AnnouncementDetail  announcements={this.state.announcements}
                    ann={this.state.announcements.filter((ann) => ann.ID === parseInt(match.params.annId, 10))[0]} />
            );
        }

        return (
            <div>
                <Switch>
                    <Route path="/home" component={() => <Header announcements={this.state.announcements} /> } />
                    <Route path="/announcement/:annId" component={AnnWithId} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
