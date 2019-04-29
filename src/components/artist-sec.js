import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
import './artist-sec.css';

export function ArtistSec(props) {

    // console.log(1, props.artistName, props.artistImage);
    if (props.artistName === "") return (<div></div>);  
    return (
            <div className='a_div' aria-live='polite'>
                <img className='art_img' src={`${props.artistImage}`} alt={`${props.artistName}`} />
                <div className="">
                    <div className="art-font mg-l">{props.artistName}</div>
                    <div><SearchForm /></div>
                </div>
            </div>
    );
}

const mapStateToProps = state => {
    const artistName = state.demo.artistInfo ? state.demo.artistInfo.name : "";
    const artistImage = state.demo.artistInfo ? 
        state.demo.artistInfo.images[2] ?     
            state.demo.artistInfo.images[2].url: "" 
        : "";   // 160px image

    return { artistName, artistImage }
};

export default connect(mapStateToProps)(ArtistSec);