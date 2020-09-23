import React from 'react';
import {AddAnnouncement} from '../Announcement';
import { RenderHomeItem } from '../Home';

const AnnouncementList = (props) => {
    const announcements = props.announcements;

    const rendered_anns = announcements.map((ann) => {
        return (
            <div className="col-12" key={ann.ID}>
                <RenderHomeItem ann={ann} />
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
