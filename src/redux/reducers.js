import { nanoid } from '@reduxjs/toolkit';
import * as ActionTypes from './ActionTypes';

const initialState = {
    announcements:[
        {
            ID: nanoid(),
            title: "Test announcement 1",
            description: "Test test test",
            date: new Date(2020, 8, 21).toDateString(),
            edited: false
        },
        {
            ID: nanoid(),
            title: "Test announcement 2",
            description: "Test test test test test",
            date: new Date(2020, 8, 21).toDateString(),
            edited: false
        },
        {
            ID: nanoid(),
            title: "Test announcement 3",
            description: "Test test test test",
            date: new Date(2020, 8, 21).toDateString(),
            edited: false
        }
    ]
};

export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ANNOUNCEMENT:
            return Object.assign({}, state, {
                announcements: [
                    ...state.announcements,
                    {
                        ID: action.payload.ID,
                        title: action.payload.title,
                        description: action.payload.description,
                        date: action.payload.date,
                        edited: false
                    }
                ]
            });

        case ActionTypes.EDIT_ANNOUNCEMENT:
            return Object.assign({}, state, {
                announcements: state.announcements.map(ann => {
                    if (ann.ID === action.payload.ID) {
                        return Object.assign({}, ann, {
                            title: action.payload.title,
                            description: action.payload.description
                        });
                    }
                    return ann;
                })
            });

        case ActionTypes.DELETE_ANNOUNCEMENT:
            return state.filter(ann => ann.ID !== action.payload);

        default:
            return state;
    }
}
