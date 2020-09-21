import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AddAnnouncement from './AddAnnouncement';

class RenderHomeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showItem: this.props.ann.show,
            isModalOpen: false
        };
        this.hideItem = this.hideItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    hideItem() {
        this.props.ann.show = false;
        this.setState({showItem: false});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.toggleModal();
        this.props.ann.edited = true;
        this.props.ann.title = this.title.value;
        this.props.ann.description = this.description.value;
    }

    render() {
        if(this.props.ann.show){
            return (
                <div className="col-12 mt-5" key={this.props.ann.ID}>
                    <Card className="text-center">
                        <CardHeader tag="h3">
                            <Button className="float-right ml-1" outline color="danger" onClick={() => this.hideItem()}>
                                <span className="fa fa-trash" />
                            </Button>
                            <Button className="float-right" outline onClick={() => this.toggleModal()}>
                                <span className="fa fa-pencil" />
                            </Button>
                            <Link to={`/announcement/${this.props.ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                                {this.props.ann.title}
                            </Link>
                        </CardHeader>
                        <Link to={`/announcement/${this.props.ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                            <CardBody>
                                <CardText>{this.props.ann.description}</CardText>
                            </CardBody>
                            <CardFooter className="text-muted text-right">{this.props.ann.edited?<i>Edited </i>: null }
                                Posted on {this.props.ann.date.toDateString()}</CardFooter>
                        </Link>
                    </Card>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Edit Announcement</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="title">Title</Label>
                                    <Input type="text" id="title" name="title" innerRef={(input) => this.title=input} defaultValue={this.props.ann.title}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="description">Description</Label>
                                    <Input type="textarea" id="description" name="description" innerRef={(input) => this.description=input}
                                        defaultValue={this.props.ann.description} />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Edit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
        return null;
    }
}

const Home = () => {
    const announcements = useSelector(state => state.announcements);

    const rendered_anns = announcements.map((ann) => {
        if(ann.show && ann.ID < 3) {
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

export default Home;
