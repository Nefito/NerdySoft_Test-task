import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editAnnouncement } from '../redux/ActionCreators';
import MyModal from '../components/ModalComponent';

const EditAnnouncement = ({ dispatch, ann }) => {
    const [title, setTitle] = useState(ann.title);
    const [description, setDescription] = useState(ann.description);

    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDescription(e.target.value)

    const onEditClicked = () => {
          dispatch(editAnnouncement({ ID: ann.ID, title, description }));
    }

    return (
        <MyModal submitBtnText="Edit" faIcon="pencil" btnClassName="float-right" btnColor="secondary"  onTitleChanged={onTitleChanged} onDescChanged={onDescChanged}
             onBtnClicked={onEditClicked} defValueNeeded={true} title={ann.title} description={ann.description}/>
    );
}
export default connect()(EditAnnouncement);
