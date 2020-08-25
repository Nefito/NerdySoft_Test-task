import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: []
        };
    }

    render() {
        return (
            <Navbar dark color="secondary">
                <div className="container">
                    <NavbarBrand href="/">Announcement Website</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Header;
