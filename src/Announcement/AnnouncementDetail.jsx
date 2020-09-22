import React from 'react';
import { useSelector } from 'react-redux';
import { AnnouncementDetailComponent } from '../components';

const AnnouncementDetail = ({ match }) => {

    const { annId } = match.params;
    const ann = useSelector(state => state.announcements.find(ann => ann.ID === annId));
    const announcements = useSelector(state => state.announcements);

    if(!ann) {
        return (
            <h4> Announcement Not Found :(</h4>
        );
    }

    return (
        <AnnouncementDetailComponent ann={ann} announcements={announcements} />
    );
}
export default AnnouncementDetail;
