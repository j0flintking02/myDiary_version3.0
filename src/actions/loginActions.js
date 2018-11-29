import { LOGIN_USER } from './types';

export const loginUser = data => (dispatch) => {
  fetch('https://mydiary201808.herokuapp.com/api/v1/auth/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://mydiary201808.herokuapp.com',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((response) => {
      localStorage.setItem('token', response.token);
      dispatch({
        type: LOGIN_USER,
        payload: response,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
