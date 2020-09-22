import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { AnnouncementList, Header } from '../components';

const Home = (props) => {
    const announcements = useSelector(state => state.announcements);
    const [filtered, setFiltered] = useState(announcements);
    const [searchItem, setSearchItem] = useState('');

    const handleChange = event => {
        setSearchItem(event.target.value);
    };

    useEffect(() => {
        const res = announcements.filter(ann => ann.title.toLowerCase().includes(searchItem.toLowerCase()));
        setFiltered(res);
    }, [searchItem]);

    return (
        <>
            <Header searchNeeded={true} handleChange={handleChange} />
            <AnnouncementList announcements={filtered} />
        </>
    );
}

export default Home;
