import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';

function RenderHomeItem({ann, onClick}) {
    return (
        <Card className="text-center" onClick={() => onClick(ann.ID)}>
            <CardHeader tag="h3">{ann.title}</CardHeader>
            <CardBody>
                <CardText>{ann.description}</CardText>
            </CardBody>
            <CardFooter className="text-muted text-right">Posted on {ann.date.toDateString()}</CardFooter>
        </Card>
    );
}

const Home = (props) => {

    const ann_list = props.announcements.map((ann) => {
        return (
            <div className="col-12 mt-5" key={ann.ID}>
                <RenderHomeItem ann={ann} onClick={props.onClick} />
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


export default Home;
