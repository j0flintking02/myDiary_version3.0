import { ADD_USER } from '../actions/types';

const initialState = {
  message: '',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
