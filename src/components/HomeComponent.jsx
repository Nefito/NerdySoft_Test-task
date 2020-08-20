import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';

class Home extends Component {

    onAnnSelect(ann) {
        this.setState({ selectedAnn: ann});
    }

    render() {
        const ann_list = this.props.announcements.map((ann) => {
            return (
                <div className="col-12 mt-5">
                    <Card key={ann.id} className="text-center" onClick={() => this.props.onClick(ann.id)}>
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
