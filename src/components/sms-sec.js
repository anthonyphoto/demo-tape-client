import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
import './artist-sec.css';

export function SmsSec(props) {

    if (!props.smsResult) {
        return(
            <div className='sms_div' aria-live='polite'>
                <div className='sms_w'>
                * Note: Unfortunately, Twilio's trial SMS does not work with unverified phone numbers. If your number is not registered, please feel free to test with my number (215-347-0245). 
                </div>
            </div>            
        )
    }
    const {status, message} = props.smsResult;

    return (
            <div className='sms_div' aria-live='polite'>
                { 
                    status === "queued" ?
                    <div className='sms_w blue'>
                        SMS is successfully sent. "{message}"
                    </div>
                    :
                    <div className='sms_w r'>
                        SMS Error: {message}
                    </div>
                }
            </div>
    );
}

const mapStateToProps = state => {

    return { 
        smsResult: state.demo.smsResult
    }
};

export default connect(mapStateToProps)(SmsSec);