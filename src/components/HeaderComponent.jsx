import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form, Input } from 'reactstrap';
import Home from './HomeComponent';

//not rewritten yet
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: this.props.announcements
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
          filtered: this.props.announcements
        });
    }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.announcements
    });
  }

    handleChange(e) {
        let curr_list = this.props.announcements;
        let new_list = curr_list;

        if (e.target.value !== '') {
            new_list = curr_list.filter((ann) => ann.title.toLowerCase().includes(e.target.value.toLowerCase()));
        }
        else {
            new_list = this.props.announcements;
        }
        this.setState({
            filtered: new_list
        });
    }

    render() {
        return (
            <>
                <Navbar dark color="secondary">
                    <div className="container">
                        <NavbarBrand href="/">Announcement Website</NavbarBrand>
                        <Form>
                            <Input type="search" name="search" id="search" onChange={this.handleChange} placeholder="Search Announcement" />
                        </Form>
                    </div>
                </Navbar>
                <Home />
            </>
        );
    }
}

export default Header;
