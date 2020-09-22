import React from 'react';
import {RenderAnnouncement} from '../components';

const RenderSimilarAnn = (props) => {
    let annID_list = [];
    let sorted_map = new Map([...props.all_words_count.entries()].sort((a, b) => b[1] - a[1]));
    for (let i = 0; i < 3; i++) {
        for(let [key, value] of sorted_map.entries()) {
            if(value > 1){
                annID_list.push(key);
                sorted_map.delete(key);
            }
        }
        if (annID_list.length > 0) {
            return annID_list.map((ID) => {
                const ann = props.announcements.find(ann => ann.ID === ID);
                return (
                    <RenderAnnouncement ann={ann} divClass="mt-3" cardClass="text-center mt-2" fullText={false} />
                );
            });
        }
        return (<h4> No Similar Announcements Were Found :(</h4>);
    }
}
export default RenderSimilarAnn;
