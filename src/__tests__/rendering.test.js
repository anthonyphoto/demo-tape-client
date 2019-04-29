import React from 'react';
import {shallow} from 'enzyme';
import {LandingPage} from '../components/landing-page';
import {ListSec} from '../components/list-sec';
import InputForm from '../components/input-form';
import ErrorSec from '../components/error-sec';
import ListItem from '../components/list-item';

describe('<LandingPage/>', () => {

    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

    // <ErrorSec/> displayed when error is not null
    it('Renders an error', () => {  
        const wrapper = shallow(<LandingPage error={{status: 501, message: "test error"}} />);
        const errorSec = wrapper.find(ErrorSec);
        expect(errorSec.length).toEqual(1);
    });

    // <ErrorSec/> not displayed when error is null
    it('Renders no error', () => {  
        const wrapper = shallow(<LandingPage error={null} />);
        const errorSec = wrapper.find(ErrorSec);
        expect(errorSec.length).toEqual(0);
    });

});

describe('<ListSec/>', () => {
    const trackList = [
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
    ];

    it('Renders without crashing', () => {
        shallow(<ListSec filterList={trackList}/>);
    });

    it('Should display 2 traks on the list', () => {
        const wrapper = shallow(<ListSec filterList={trackList} />);
        const listItem = wrapper.find(ListItem);
        expect(listItem.length).toEqual(2);
        console.log(22, listItem.first().prop);
    });

});

describe('<InputForm/>', () => {

    it('Renders without crashing', () => {
        shallow(<InputForm />);
    });

    it('Should fire the onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InputForm onSubmit={callback}/>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });

});



