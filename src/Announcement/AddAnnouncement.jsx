import React, { useState } from 'react'
import { connect } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addAnnouncement } from '../redux/ActionCreators';
import MyModal from '../components/ModalComponent';

const AddAnnouncement = ({ dispatch }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDescription(e.target.value)


    const onSubmitClicked = () => {
        if (title && description) {
            dispatch(
                addAnnouncement({
                    ID: nanoid(),
                    title,
                    description,
                    date: new Date().toDateString()
                })
            );
            setTitle('');
            setDescription('');
        }
    }

    return (
        <MyModal submitBtnText="Add" faIcon="plus" btnClassName="mt-3" btnColor="primary"  onTitleChanged={onTitleChanged} onDescChanged={onDescChanged}
             onBtnClicked={onSubmitClicked} valueNeeded={true} title={title} description={description}/>
    );
}
export default connect()(AddAnnouncement);
