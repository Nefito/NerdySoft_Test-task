import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AnnouncementList, Header } from '../components';
import { selectAnnouncements } from '../redux/selectors';

const mapStateToProps = (state) => {
    return {
        announcements: selectAnnouncements(state)
    }
}

const Home = ({announcements}) => {
    const [searchItem, setSearchItem] = useState('');

    const handleChange = event => {
        setSearchItem(event.target.value);
    };
    return (
        <>
            <Header searchNeeded={true} handleChange={handleChange} />
            <AnnouncementList announcements={announcements.filter(ann => ann.title.toLowerCase().includes(searchItem.toLowerCase()))} />
        </>
    );
}

export default connect(mapStateToProps)(Home);
