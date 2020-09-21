import React, { useState } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AddAnnouncement from './AddAnnouncement';

const RenderHomeItem = (props) => {

    const ann = props.ann;

    const [showItem, setShowItem] = useState(ann.show);

    const hideItem = () => {
        setShowItem(false);
        ann.show = false;
    }

    if(ann.show){
        return (
            <div className="col-12 mt-5" key={ann.ID}>
                <Card className="text-center">
                    <CardHeader tag="h3">
                        <Button className="float-right ml-1" outline color="danger" onClick={() => hideItem}>
                            <span className="fa fa-trash" />
                        </Button>
                        <Link to={`/announcement/${ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                            {ann.title}
                        </Link>
                    </CardHeader>
                    <Link to={`/announcement/${ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                        <CardBody>
                            <CardText>{ann.description.substring(0, 150)}<b>...</b></CardText>
                        </CardBody>
                        <CardFooter className="text-muted text-right">{ann.edited?<i>Edited </i>: null }
                            Posted on {ann.date}</CardFooter>
                    </Link>
                </Card>
            </div>
        );
    }
    return null;
}

const Home = () => {
    const announcements = useSelector(state => state.announcements);

    const rendered_anns = announcements.map((ann) => {
        if(ann.show) {
            return (
                <RenderHomeItem ann={ann} />
            );
        }
        return null;
    });
    return (
        <div className="container">
            <AddAnnouncement />
            <div className="row">
                {rendered_anns}
            </div>
        </div>
    );
}

export default Home;
