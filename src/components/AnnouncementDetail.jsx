import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAnn({ann}) {
        if (ann != null) {
            return (
                <Card className="text-center">
                    <CardHeader tag="h3">{ann.title}</CardHeader>
                    <CardBody>
                        <CardText>{ann.description}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted text-right">{ann.edited?<i>Edited </i>: null }
                        Posted on {ann.date.toDateString()}</CardFooter>
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
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.ann.title}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <RenderAnn ann={props.ann} />
        </div>
    );
}

export default AnnouncementDetail;
