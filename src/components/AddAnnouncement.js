import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { announcementAdded } from './AnnouncementSlice';

const AddAnnouncement = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDescription(e.target.value)

    const dispatch = useDispatch();

    const onSubmitClicked = () => {
        if (title && description) {
            dispatch(
                announcementAdded({
                    ID: nanoid(),
                    title,
                    description,
                    date: new Date().toDateString(),
                    show: true,
                    edited: false
                })
            );
            setTitle('');
            setDescription('');
            toggleModal();
        }
    }

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
                        <Button type="button" value="submit" color="primary" onClick={onSubmitClicked}>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default AddAnnouncement;
