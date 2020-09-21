import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const AddAnnouncement = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDescription(e.target.value)

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.toggleModal();
    //     this.props.announcements.push({
    //         ID: this.props.announcements.length,
    //         title: this.title.value,
    //         description: this.description.value,
    //         date: new Date(),
    //         show: true
    //     });
    // }

    return (
        <div>
            <Button className="mt-3" outline color="primary" onClick={toggleModal}>
                <span className="fa fa-plus"/> Add an Announcement
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add an Announcement</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" id="title" name="title" value={title} onChange={onTitleChanged} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input type="textarea" id="description" name="description" value={description} onChange={onDescChanged} />
                        </FormGroup>
                        <Button type="button" value="submit" color="primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default AddAnnouncement;
