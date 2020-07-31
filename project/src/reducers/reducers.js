import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions';

const initialState = {
    players: [],
    isFetching: false, 
    error: '',
}

const playersReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case FETCH_DATA:
            return {
                ...state, 
                isFetching: true, 
            }
        case FETCH_SUCCESS:
            return {
               ...state, 
               isFetching: false, 
               payload: actions.payload     
            } 
        case FETCH_FAILURE: 
            return {
                ...state,
                isFetching: false,
                payload: actions.payload,
            }  
            default:
                return state;  
    }
   
}

export default playersReducer;