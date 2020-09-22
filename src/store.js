import { configureStore } from '@reduxjs/toolkit'
import announcementsReducer from './Announcement/AnnouncementSlice';

export default configureStore({
  reducer: {
      announcements: announcementsReducer
  }
});
