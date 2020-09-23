import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap'
import { deleteAnnouncement } from '../redux/ActionCreators';

const DeleteAnnouncement = ({dispatch, annId}) => {
    
    const onDelete = annId => {
        dispatch(deleteAnnouncement(annId));
    }

    return (
        <Button className="float-right ml-1" outline color="danger" onClick={() => onDelete(annId)}>
            <span className="fa fa-trash" />
        </Button>
    );
}

export default connect()(DeleteAnnouncement);
