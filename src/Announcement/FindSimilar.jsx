import React from 'react';
import {RenderAnnouncement} from '../components';

const FindSimilar = ({announcements, selectedAnn}) => {
    let all_words_count = new Map();

    announcements.map((ann) => {
        let title_word_count = 0;
        let desc_words_count = 0;

        if(selectedAnn.ID !== ann.ID) {
            for (let i = 0; i < selectedAnn.title.split(' ').length; i++) {
                for (let j = 0; j < ann.title.split(' ').length; j++) {
                    if (selectedAnn.title.split(' ')[i] === ann.title.split(' ')[j]) {
                        title_word_count++;
                    }
                }
            }
            for (let i = 0; i < selectedAnn.description.split(' ').length; i++) {
                for (let j = 0; j < ann.description.split(' ').length; j++) {
                    if (selectedAnn.description.split(' ')[i] ===  ann.description.split(' ')[j]) {
                        desc_words_count++;
                    }
                }
            }
            all_words_count.set(ann.ID, title_word_count+desc_words_count);
        }
    });

    let annID_list = [];
    let sorted_map = new Map([...all_words_count.entries()].sort((a, b) => b[1] - a[1]));
    for (let i = 0; i < 3; i++) {
        for(let [key, value] of sorted_map.entries()) {
            if(value > 1){
                annID_list.push(key);
                sorted_map.delete(key);
            }
        }
        if (annID_list.length > 0) {
            return annID_list.map((ID) => {
                const ann = announcements.find(ann => ann.ID === ID);
                return (
                    <RenderAnnouncement ann={ann} divClass="mt-3" cardClass="text-center mt-2" fullText={false} />
                );
            });
        }
        return (<h4> No Similar Announcements Were Found :(</h4>);
    }
}

export default FindSimilar;
