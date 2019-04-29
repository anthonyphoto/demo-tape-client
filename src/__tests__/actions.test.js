import * as actions from './../actions/demo';

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

describe('fetchRequest', () => {
    it('Should return the action, fetchRequest', () => {
        const action = actions.fetchRequest();
        expect(action.type).toEqual(actions.FETCH_REQUEST);
    });
});

describe('fetchError', () => {
    it('Should return the action, fetchError', () => {
        const action = actions.fetchError({ 
            status: 501,
            message: "Test Error" 
        });
        expect(action.type).toEqual(actions.FETCH_ERROR);
        expect(action.err).toEqual({ 
            status: 501,
            message: "Test Error" 
        });
    });
});


describe('fetchTracksByArtist', () => {
    it('Should dispatch fetchTracksSuccess', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return data;
                }
            })
        );

        const dispatch = jest.fn();
        return actions.fetchTracksByArtist()(dispatch).then(() => {
            return actions.fetchTracksByArtist()(dispatch).then(() => {
                expect(dispatch).toHaveBeenCalledWith(actions.fetchTracksSuccess(data));
            });
        });
    });
});

describe('fetchTracksSuccess', () => {
    it('Should return the action, fetchTracksSuccess', () => {
        const action = actions.fetchTracksSuccess(data);
        expect(action.type).toEqual(actions.FETCH_TRACKS_SUCCESS);
        expect(action.data).toEqual(Object.assign({}, data));
    });
});

describe('updateSearch', () => {
    it('Should return the action, updateSearch', () => {
        const key = "love";
        const action = actions.updateSearch(key);
        expect(action.type).toEqual(actions.UPDATE_SEARCH);
        expect(action.key).toEqual("love");
    });
});

describe('resetState', () => {
    it('Should return the action, resetState', () => {
        const action = actions.resetState();
        expect(action.type).toEqual(actions.RESET_STATE);
    });
});