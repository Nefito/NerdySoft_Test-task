import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class AddAnnouncement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.toggleModal();
        this.props.announcements.push({
            ID: this.props.announcements.length,
            title: this.title.value,
            description: this.description.value,
            date: new Date()
        });
    }

    render() {

        const new_ann_list = this.props.announcements.map((ann) => {
            if (ann.ID > 2) {
                return (
                    <div className="mt-5" key={ann.ID}>
                        <RenderHomeItem ann={ann} />
                    </div>
                );
            }
        });

        return (
            <>
                <div>
                    <Button className="mt-3" outline onClick={this.toggleModal}>
                        <span className="fa fa-plus" /> Add an Announcement
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Add an Announcement</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="title">Title</Label>
                                    <Input type="text" id="title" name="title" innerRef={(input) => this.title=input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="description">Description</Label>
                                    <Input type="textarea" id="description" name="description" innerRef={(input) => this.description=input} />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
                {new_ann_list}
            </>
        );
    }
}

function RenderHomeItem({ann}) {
    return (
        <Card className="text-center">
            <Link to={`/announcement/${ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                <CardHeader tag="h3">{ann.title}</CardHeader>
                <CardBody>
                    <CardText>{ann.description}</CardText>
                </CardBody>
                <CardFooter className="text-muted text-right">Posted on {ann.date.toDateString()}</CardFooter>
            </Link>
        </Card>
    );
}

const Home = (props) => {

    const ann_list = props.announcements.map((ann) => {
        if(ann.ID < 3) {
            return (
                <div className="col-12 mt-5" key={ann.ID}>
                    <RenderHomeItem ann={ann} />
                </div>
            );
        }
    });
    return (
        <div className="container">
            <AddAnnouncement announcements={props.announcements} />
            <div className="row">
                {ann_list}
            </div>
        </div>
    );
}

export default Home;
