import React, {useState} from 'react';
import RenderAnnouncement from '../components/RenderAnnouncementComponent';

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

export default RenderHomeItem;
