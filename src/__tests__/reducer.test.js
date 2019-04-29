import demoReducer from './../reducers/demo';
import {fetchRequest, fetchError, fetchTracksSuccess, resetState, updateSearch} from './../actions/demo';

const data = {
    artistInfo: {
        name: "Michael Jackson"
    },
    smsResult: {
        status: 201,
        message: "test success"
    },
    tracks: [
        {
            album: "Thriller 25 Super Deluxe Edition",
            date: "1982-11-30",
            name: "Billie Jean",
            popularity: 82,
            preview: "https://p.scdn.co/mp3-preview/4eb779428d40d579f14d12a9daf98fc66c7d0be4?cid=28d9eff5d0aa4471b7f4a9e8278c1043"
        },
        {
            album: "Bad 25th Anniversary",
            date: "1987-08-31",
            name: "Smooth Criminal - 2012 Remaster",
            popularity: 77,
            preview: "https://p.scdn.co/mp3-preview/8dcbe2702477ac98c7c711cbafcac43e10063949?cid=28d9eff5d0aa4471b7f4a9e8278c1043"
        }
    ]
};

describe('demoReducer', () => {
    // Set up some dummy data
    const sampleState = {
        trackList: [],
        filterList: [],
        artistInfo: null,
        smsResult: null,
        key: "",
        loading: false,
        error: null
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = demoReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(Object.assign({}, sampleState));
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = demoReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual({});
    });
});

describe('fetchRequest', () => {
    it('Should set loading flag on', () => {
        let state;
        state = demoReducer(state, fetchRequest());
        expect(state.loading).toEqual(true);
        expect(state.error).toEqual(null);
    });
});

describe('fetchError', () => {
    it('Should set an error', () => {
        let state;
        state = demoReducer(state, fetchError({ message: "Test Error"}));
        expect(state.error).toEqual({ message: "Test Error"});
        expect(state.loading).toEqual(false);
    });
});

describe('fetchTracksSuccess', () => {
    it('Should update the state upon receiving data', () => {
        let state;
        state = demoReducer(state, fetchTracksSuccess(data));
        expect(state.trackList).toEqual(data.tracks);
        expect(state.filterList).toEqual(data.tracks);
        expect(state.artistInfo).toEqual(data.artistInfo);
        expect(state.smsResult).toEqual(data.smsResult);
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(null);
    });
});

describe('resetState', () => {
    it('Should initialize the state', () => {
        let state;
        state = demoReducer(state, resetState());
        expect(state).toEqual({
            trackList: [],
            filterList: [],
            artistInfo: null,
            smsResult: null,
            key: "",
            loading: false,
            error: null
        });
    });
});

describe('updateSearch', () => {
    it('Should update the search key', () => {
        let state;
        state = demoReducer(state, updateSearch("love"));
        expect(state.key).toEqual("love");
    });
});
