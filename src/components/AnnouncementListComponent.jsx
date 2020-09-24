import React from 'react';
import { AddAnnouncement } from '../Announcement';
import { RenderAnnouncement } from '../components';

const AnnouncementList = (props) => {

    const rendered_anns = props.announcements.map((ann) => {
        return (
            <div className="col-12" key={ann.ID}>
                <RenderAnnouncement ann={ann} divClass="col-12 mt-5" cardClass="text-center" deleteBtnNeeded={true}  fullText={false} />
            </div>
        );
    });

    return (
        <div className="container">
            <AddAnnouncement />
            <div className="row">
                {rendered_anns}
            </div>
        </div>
    );
}

export default AnnouncementList;
