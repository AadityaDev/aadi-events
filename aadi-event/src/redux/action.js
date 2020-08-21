import { ADD_EVENT, TOGGLE_EVENT, SET_FILTER } from "./actionTypes";

let nextEventId = 0;

export const addEvent = content => ({
  type: ADD_EVENT,
  payload: {
    id: ++nextEventId,
    content
  }
});

export const toggleEvent = id => ({
  type: TOGGLE_EVENT,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
