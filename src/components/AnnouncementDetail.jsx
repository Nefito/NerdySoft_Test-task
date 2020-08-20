import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';

class AnnouncementDetail extends Component {
    renderAnn(ann) {
        if (ann != null) {
            return (
                <Card className="text-center">
                    <CardHeader tag="h3">{ann.title}</CardHeader>
                    <CardBody>
                        <CardText>{ann.description}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted text-right">Posted on {ann.date.toDateString()}</CardFooter>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderAnn(this.props.selectedAnn)}
                </div>
            </div>
        );
    }
}

export default AnnouncementDetail;
