import {API_BASE_URL} from '../config';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
    type: FETCH_REQUEST
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = err => ({
    type: FETCH_ERROR,
    err
})

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const fetchTracksSuccess = data => ({
    type: FETCH_TRACKS_SUCCESS,
    data

});

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const updateSearch = key => ({
    type: UPDATE_SEARCH,
    key
});

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
    type: RESET_STATE
});


export const fetchTracksByArtist = (artist, phone) => dispatch => {
    dispatch(fetchRequest());

    return fetch(`${API_BASE_URL}/demo`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ artist, phone })
    })
    .then(res => {
        if (!res.ok && res.status !== 404) {
            return Promise.reject({
                status: res.status,
                message: res.statusText
            });
        }
        return res.json();
    })
    .then(data => {
        // console.log("data:", data);
        dispatch(fetchTracksSuccess(data))
    })
    .catch(err => dispatch(fetchError(err)));
}
