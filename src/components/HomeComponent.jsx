import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            announcements: [
                {
                    id: 0,
                    title: "Announcement №1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: new Date(2020, 8, 20)
                },
                {
                    id: 1,
                    title: "Announcement №2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: new Date(2020, 8, 20)
                },
                {
                    id: 2,
                    title: "Announcement №3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: new Date(2020, 8, 20)
                }
            ],
        };
    }

    render() {
        const ann_list = this.state.announcements.map((ann) => {
            return (
                <div key={ann.id} className="col-12 mt-5">
                    <Card className="text-center">
                        <CardHeader tag="h3">{ann.title}</CardHeader>
                        <CardBody>
                            <CardText>{ann.description}</CardText>
                        </CardBody>
                        <CardFooter className="text-muted text-right">Posted on {ann.date.toDateString()}</CardFooter>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {ann_list}
                </div>
            </div>
        );
    }
}

export default Home;
