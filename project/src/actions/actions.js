import axios from 'axios';


export const FETCH_DATA  = 'FETCH_DATA';
export const FETCH_SUCCESS  = 'FETCH_SUCCESS';
export const FETCH_FAILURE  = 'FETCH_FAILURE';


export const fetchPlayers = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    axios
        .get('http://localhost:3333/players')
        .then(res => {
            console.log('Fetch success', res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('error', err);
            dispatch({ type: FETCH_FAILURE, payload: err })
        })
}