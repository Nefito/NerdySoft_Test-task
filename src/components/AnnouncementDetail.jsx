import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';

function RenderAnn({ann}) {
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

const AnnouncementDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <RenderAnn ann={props.ann} />
            </div>
        </div>
    );
}

export default AnnouncementDetail;
