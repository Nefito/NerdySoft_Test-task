import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {AddAnnouncement} from '../Announcement';
import RenderAnnouncement from './RenderAnnouncementComponent';

const RenderHomeItem = (props) => {

    const ann = props.ann;

    const [showItem, setShowItem] = useState(ann.show);

    const hideItem = () => {
        setShowItem(false);
        ann.show = false;
    }

    if(ann.show){
        return (
            <RenderAnnouncement ann={ann} divClass="col-12 mt-5" cardClass="text-center" deleteBtnNeeded={true} hideItem={hideItem} fullText={false} />
        );
    }
    return null;
}

const Home = () => {
    const announcements = useSelector(state => state.announcements);

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
