import {
  GET_ENTRIES, ADD_ENTRIES, GET_ENTRY, UPDATE_ENTRY,
} from '../actions/types';


const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        entries: [...action.payload],
      };
    case ADD_ENTRIES:
      return {
        ...state,
        entry: action.payload.entry,
        message: action.payload.message,
      };
    case GET_ENTRY:
      return {
        ...state,
        entry: action.payload.entry,
        message: action.payload.message,
      };
    case UPDATE_ENTRY:
      return {
        ...state,
        entry: action.payload.output,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
