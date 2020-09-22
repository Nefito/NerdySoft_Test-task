import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import { Navbar, NavbarBrand, Form, Input } from 'reactstrap';
import { Home, Header } from '../components';

const Search = (props) => {
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
            <Home announcements={filtered} />
        </>
    );
}

export default Search;
