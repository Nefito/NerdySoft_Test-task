import React from 'react';
import { Navbar, NavbarBrand, Form, Input } from 'reactstrap';
import Home from './HomeComponent';

const Header = (props) => {
    return (
        <>
            <Navbar dark color="secondary">
                <div className="container">
                    <NavbarBrand href="/">Announcement Website</NavbarBrand>
                    {props.searchNeeded?
                    <Form>
                        <Input type="search" name="search" id="search" onChange={props.handleChange} placeholder="Search Announcement" />
                    </Form>
                    : null}

                </div>
            </Navbar>
        </>
    );
}

export default Header;
