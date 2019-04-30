import React from 'react';
import {connect} from 'react-redux';
import InputForm from './input-form';
import ArtistSec from './artist-sec';
import SmsSec from './sms-sec';
import ListSec from './list-sec';
import ErrorSec from './error-sec';
import './landing-page.css';

export class LandingPage extends React.Component{
    // componentDidUpdate() {
        // document.getElementById('ls-track').scrollIntoView();
    // }
    render() {
        if (this.props.error) {
            return  <ErrorSec err={this.props.error} />
        }

        let loadingJsx = "";
        if (this.props.loading) {
            loadingJsx = (
                <div className="loading">
                    <img src="/img/loading-3.gif" alt="loading" />
                </div>
            )
        }

        return (
        <main className='main-bg fi'>
            {loadingJsx}
            <div className='flx'>
                <div id='ls-track'>
                    <a href="https://www.promptworks.com/" target="_blank">
                    <img src="/img/promptworks.png" alt="PromptWorks Logo" width="220px" />
                    </a>
                </div>
            </div>
            <br /><br />
            {/* <div className='div'>
                <InputForm /> 
            </div> */}
            <SmsSec />  <ArtistSec />  <ListSec />
        </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.demo.error,
        loading: state.demo.loading
    }
}

export default connect(mapStateToProps)(LandingPage);