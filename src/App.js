import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Announcement Website</NavbarBrand>
                    </div>
                </Navbar>
                <Home />
            </div>
        );
    }
}

export default App;
