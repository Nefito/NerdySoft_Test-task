import React from 'react';
import { useSelector } from 'react-redux';
import {AddAnnouncement} from '../Announcement';
import { RenderHomeItem } from '../Home';

const Home = (props) => {
    const announcements = props.announcements;

    const rendered_anns = announcements.map((ann) => {
        if(ann.show) {
            return (
                <RenderHomeItem ann={ann} />
            );
        }
        return null;
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

export default Home;
