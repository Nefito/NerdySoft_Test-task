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
            date: new Date(),
            show: true
        });
    }

    render() {

        const new_ann_list = this.props.announcements.map((ann) => {
            if (ann.show && ann.ID > 2) {
                return (
                    <div className="row">
                    <RenderHomeItem ann={ann} />
                    </div>
                );
            }
            return null;
        });

        return (
            <>
                <div>
                    <Button className="mt-3" outline color="primary" onClick={this.toggleModal}>
                        <span className="fa fa-plus"/> Add an Announcement
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

class RenderHomeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showItem: this.props.ann.show
        };
        this.hideItem = this.hideItem.bind(this);
    }
    hideItem() {
        this.props.ann.show = false;
        this.setState({showItem: false});
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
                            <Button className="float-right" outline>
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
                            <CardFooter className="text-muted text-right">Posted on {this.props.ann.date.toDateString()}</CardFooter>
                        </Link>
                    </Card>
                </div>
            );
        }
        else{
            return(null)
        }
    }
}

const Home = (props) => {
    const ann_list = props.announcements.map((ann) => {
        if(ann.show && ann.ID < 3) {
            return (
                <RenderHomeItem ann={ann}  />
            );
        }
        return null;
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
