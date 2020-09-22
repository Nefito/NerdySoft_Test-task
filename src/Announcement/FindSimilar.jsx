import React from 'react';
import RenderSimilarAnn from './RenderSimilar';

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
    return (
        <div>
            <RenderSimilarAnn announcements={announcements} all_words_count={all_words_count}/>
        </div>
    );
}

export default FindSimilar;
