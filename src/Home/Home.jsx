import React, { useState } from 'react';
import { connect } from 'react-redux';
import { store } from '../redux/configureStore';
import { AnnouncementList, Header } from '../components';

const mapStateToProps = state => {
    return {
        announcements: state.announcements
    }
}

const Home = ({announcements}) => {
    const [searchItem, setSearchItem] = useState('');

    const handleChange = event => {
        setSearchItem(event.target.value);
    };
    //console.log(announcements.announcements);
    return (
        <>
            <Header searchNeeded={true} handleChange={handleChange} />
            <AnnouncementList announcements={announcements.filter(ann => ann.title.toLowerCase().includes(searchItem.toLowerCase()))} />
        </>
    );
}

export default connect(mapStateToProps)(Home);
