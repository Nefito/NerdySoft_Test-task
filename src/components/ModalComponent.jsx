import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const MyModal = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const faIconClassName = 'fa fa-' + props.faIcon;

    return (
        <div>
            <Button className={props.btnClassName} color={props.btnColor} outline onClick={toggleModal}>
                <span className={faIconClassName} />
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{props.submitBtnText} Announcement</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="title">Title</Label>
                            {props.valueNeeded?
                                <Input type="text" id="title" name="title" value={props.title} onChange={props.onTitleChanged} />
                            : null}
                            {props.defValueNeeded?
                                <Input type="text" id="title" name="title" defaultValue={props.title} onChange={props.onTitleChanged} />
                            : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            {props.valueNeeded?
                                <Input type="textarea" id="description" name="description" value={props.description} onChange={props.onDescChanged} />
                            : null}
                            {props.defValueNeeded?
                                <Input type="textarea" id="description" name="description" defaultValue={props.description} onChange={props.onDescChanged} />
                            : null}
                        </FormGroup>
                        <Button type="button" value="submit" color="primary" onClick={() => {props.onBtnClicked(); toggleModal()}}>
                            {props.submitBtnText}
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default MyModal;
