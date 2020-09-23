import React from 'react';
import {RenderAnnouncement} from '../components';

const RenderHomeItem = (props) => {

    const ann = props.ann;

    return (
        <RenderAnnouncement ann={ann} divClass="col-12 mt-5" cardClass="text-center" deleteBtnNeeded={true}  fullText={false} />
    );
}

export default RenderHomeItem;
