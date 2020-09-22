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
                            <Input type="text" id="title" name="title" value={props.valueNeeded? props.title : null}
                                defaultValue={props.defValueNeeded? props.title : null} onChange={props.onTitleChanged} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input type="textarea" id="description" name="description" value={props.valueNeeded? props.description : null}
                                defaultValue={props.defValueNeeded? props.description : null}  onChange={props.onDescChanged} />
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
