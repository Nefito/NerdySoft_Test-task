import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { announcementAdded } from './AnnouncementSlice';
import MyModal from './ModalComponent';

const AddAnnouncement = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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
        }
    }

    return (
        <MyModal submitBtnText="Add" faIcon="plus" btnClassName="mt-3" btnColor="primary"  onTitleChanged={onTitleChanged} onDescChanged={onDescChanged}
             onBtnClicked={onSubmitClicked} valueNeeded={true} title={title} description={description}/>
    );
}
export default AddAnnouncement;
