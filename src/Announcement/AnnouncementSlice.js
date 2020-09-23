// import { createSlice } from '@reduxjs/toolkit'
// import { nanoid } from '@reduxjs/toolkit';
//
//
//
// const AnnouncementSlice = createSlice({
//     name: 'announcements',
//     initialState,
//     reducers: {
//         announcementAdded(state, action) {
//             state.push(action.payload);
//         },
//         announcementEdited(state, action) {
//             const {ID, title, description} = action.payload;
//             const existingAnn = state.find(ann => ann.ID === ID);
//             if (existingAnn) {
//                 existingAnn.title = title;
//                 existingAnn.description = description;
//                 existingAnn.edited = true;
//             }
//         }
//     }
// });
//
// export const { announcementAdded, announcementEdited } = AnnouncementSlice.actions;
// export default AnnouncementSlice.reducer;
