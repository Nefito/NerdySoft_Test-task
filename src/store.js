import { configureStore } from '@reduxjs/toolkit'
import announcementsReducer from './components/AnnouncementSlice';

export default configureStore({
  reducer: {
      announcements: announcementsReducer
  }
});
