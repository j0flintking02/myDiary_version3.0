import { LOGIN_USER } from '../actions/types';

const initialState = {
  token: '',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
