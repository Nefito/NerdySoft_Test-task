import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { announcementEdited } from './AnnouncementSlice';

const EditAnnouncement = (props) => {

    const ann = props.ann;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState(ann.title);
    const [description, setDescription] = useState(ann.description);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDescription(e.target.value)

    const dispatch = useDispatch();

    const onEditClicked = () => {
    if (title && description) {
      dispatch(announcementEdited({ ID: ann.ID, title, description }))
      toggleModal();
    }
  }

    return (
        <>
            <Button className="float-right" outline onClick={toggleModal}>
                <span className="fa fa-pencil" />
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Edit Announcement</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" id="title" name="title" defaultValue={ann.title} onChange={onTitleChanged} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input type="textarea" id="description" name="description" defaultValue={ann.description}  onChange={onDescChanged} />
                        </FormGroup>
                        <Button type="button" value="submit" color="primary" onClick={onEditClicked}>Edit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default EditAnnouncement;
