import React, { useState } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AddAnnouncement from './AddAnnouncement';

const RenderHomeItem = (props) => {

    const ann = props.ann;

    const [showItem, setShowItem] = useState(ann.show);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const hideItem = () => {
        setShowItem(false);
        ann.show = false;
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.toggleModal();
    //     this.props.ann.edited = true;
    //     this.props.ann.title = this.title.value;
    //     this.props.ann.description = this.description.value;
    // }

    if(ann.show){
        return (
            <div className="col-12 mt-5" key={ann.ID}>
                <Card className="text-center">
                    <CardHeader tag="h3">
                        <Button className="float-right ml-1" outline color="danger" onClick={() => hideItem}>
                            <span className="fa fa-trash" />
                        </Button>
                        <Button className="float-right" outline onClick={() => toggleModal}>
                            <span className="fa fa-pencil" />
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
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Edit Announcement</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="title">Title</Label>
                                <Input type="text" id="title" name="title" value={ann.title} defaultValue={ann.title}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Description</Label>
                                <Input type="textarea" id="description" name="description" value={ann.description}
                                    defaultValue={ann.description} />
                            </FormGroup>
                            <Button type="button" value="submit" color="primary">Edit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
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
            <AddAnnouncement announcements={announcements} />
            <div className="row">
                {rendered_anns}
            </div>
        </div>
    );
}

export {RenderHomeItem}
export default Home;
