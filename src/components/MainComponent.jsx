import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Announcement Website</NavbarBrand>
                    </div>
                </Navbar>
                <Switch>
                    <Route path="/home" component={() => <Home announcements={this.state.announcements} /> } />
                    <Route path="/announcement/:annId" component={AnnWithId} />
                </Switch>
            </div>
        );
    }
}

export default Main;
