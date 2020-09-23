import * as ActionTypes from './ActionTypes';

export const addAnnouncement = ann => ({
    type: ActionTypes.ADD_ANNOUNCEMENT,
    payload: ann
});
export const editAnnouncement = editedAnn => ({
    type: ActionTypes.EDIT_ANNOUNCEMENT,
    payload: editedAnn
});
export const deleteAnnouncement = annId => ({
     type: ActionTypes.DELETE_ANNOUNCEMENT,
     payload: annId
 });
