import * as actions from '../actions/demo';

const initialState = {
    trackList: [],
    filterList: [],
    artistInfo: null,
    smsResult: null,
    key: "",
    loading: false,
    error: null
}

export default function reducer (state = initialState, action) {
    switch(action.type) {

        case actions.FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });

        case actions.FETCH_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.err
            });

        case actions.RESET_STATE:
            return initialState;

        case actions.FETCH_TRACKS_SUCCESS:
            if (action.data.statusCode === 404) { // no records found
                return Object.assign({}, initialState,
                    {smsResult: 
                        {   
                            status: 404, 
                            message: "Sorry; SMS was not sent because no track records were found"
                        }
                    });
            }
            return Object.assign({}, state, {
                trackList: action.data.tracks,
                filterList: action.data.tracks,
                artistInfo: action.data.artistInfo,
                smsResult: action.data.smsResult,
                loading: false,
                error: null
            });
        
        case actions.UPDATE_SEARCH:
            const keyLower = action.key.toLowerCase();
            const newList = state.trackList.filter(item => {
                const itemStr = `${item.name}|${item.album}`;
                if (itemStr.toLowerCase().includes(keyLower))  return true;
            });
            return Object.assign({}, state, {
                filterList: newList,
                key: keyLower
            });

        default:
            return state;
    }

}