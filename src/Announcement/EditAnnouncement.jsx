import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { announcementEdited } from './AnnouncementSlice';
import MyModal from '../components/ModalComponent';

const EditAnnouncement = (props) => {

    const ann = props.ann;

    const [title, setTitle] = useState(ann.title);
    const [description, setDescription] = useState(ann.description);

    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDescription(e.target.value)

    const dispatch = useDispatch();

    const onEditClicked = () => {
    if (title && description) {
      dispatch(announcementEdited({ ID: ann.ID, title, description }))
    }
  }

    return (
        <MyModal submitBtnText="Edit" faIcon="pencil" btnClassName="float-right" btnColor="secondary"  onTitleChanged={onTitleChanged} onDescChanged={onDescChanged}
             onBtnClicked={onEditClicked} defValueNeeded={true} title={ann.title} description={ann.description}/>
    );
}
export default EditAnnouncement;
