import {
  GET_ENTRIES, ADD_ENTRIES, GET_ENTRY, UPDATE_ENTRY,
} from './types';

export const getEntries = () => (dispatch) => {
  const token = localStorage.getItem('token');
  fetch('https://mydiary201808.herokuapp.com/api/v1/entries', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://mydiary201808.herokuapp.com',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
  })
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: GET_ENTRIES,
        payload: response.entries,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};

export const AddEntries = data => (dispatch) => {
  const token = localStorage.getItem('token');
  fetch('https://mydiary201808.herokuapp.com/api/v1/entries', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://mydiary201808.herokuapp.com',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: ADD_ENTRIES,
        payload: response,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
export const getEntry = id => (dispatch) => {
  const token = localStorage.getItem('token');
  fetch(`https://mydiary201808.herokuapp.com/api/v1/entries/${id}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://mydiary201808.herokuapp.com',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
  })
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: GET_ENTRY,
        payload: response,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
export const update = (id, data) => (dispatch) => {
  const token = localStorage.getItem('token');
  fetch(`https://mydiary201808.herokuapp.com/api/v1/entries/${id}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://mydiary201808.herokuapp.com',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: UPDATE_ENTRY,
        payload: response,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
