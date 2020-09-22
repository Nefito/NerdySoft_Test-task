import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        ID: nanoid(),
        title: "Test announcement 1",
        description: "Test test test",
        date: new Date(2020, 8, 21).toDateString(),
        show: true,
        edited: false
    },
    {
        ID: nanoid(),
        title: "Test announcement 2",
        description: "Test test test test test",
        date: new Date(2020, 8, 21).toDateString(),
        show: true,
        edited: false
    },
    {
        ID: nanoid(),
        title: "Test announcement 3",
        description: "Test test test test",
        date: new Date(2020, 8, 21).toDateString(),
        show: true,
        edited: false
    }
];

const AnnouncementSlice = createSlice({
    name: 'announcements',
    initialState,
    reducers: {
        announcementAdded(state, action) {
            state.push(action.payload);
        },
        announcementEdited(state, action) {
            const {ID, title, description} = action.payload;
            const existingAnn = state.find(ann => ann.ID === ID);
            if (existingAnn) {
                existingAnn.title = title;
                existingAnn.description = description;
                existingAnn.edited = true;
            }
        }
    }
});

export const { announcementAdded, announcementEdited } = AnnouncementSlice.actions;
export default AnnouncementSlice.reducer;
