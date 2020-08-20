import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import AnnouncementDetail from './AnnouncementDetail';
import { ANNOUNCEMENTS } from '../shared/announcements';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            announcements: ANNOUNCEMENTS,
            selectedAnn: null
        };
    }

    onAnnSelect(annId) {
        this.setState({ selectedAnn: annId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Announcement Website</NavbarBrand>
                    </div>
                </Navbar>
                <Home announcements={this.state.announcements} onClick={(annId) => this.onAnnSelect(annId)} />
                <AnnouncementDetail ann={this.state.announcements.filter((ann) => ann.id = this.state.selectedAnn)[0]} />
            </div>
        );
    }
}

export default Main;
