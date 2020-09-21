import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        ID: -2,
        title: "Test announcement 1",
        description: "Test test test",
        date: new Date(2020, 8, 21),
        show: true,
        edited: false
    },
    {
        ID: -1,
        title: "Test announcement 2",
        description: "Test test test test test",
        date: new Date(),
        show: true,
        edited: false
    }
];

const AnnouncementSlice = createSlice({
    name: 'announcements',
    initialState,
    reducers: {}
});

export default AnnouncementSlice.reducer;
