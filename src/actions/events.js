import { types } from "../types/types";

export const startGetEvents = ( events ) => {

    return (dispatch) => {
        dispatch(setEvents( events ))
    }
}

const setEvents = ( events ) => ({
    type: types.getEvents,
    payload: events
});