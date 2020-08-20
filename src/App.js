import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import { ANNOUNCEMENTS } from './shared/announcements';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            announcements: ANNOUNCEMENTS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Announcement Website</NavbarBrand>
                    </div>
                </Navbar>
                <Home announcements={this.state.announcements}/>
            </div>
        );
    }
}

export default App;
