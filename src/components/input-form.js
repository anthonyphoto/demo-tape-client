import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, reset, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, validPhone, normalizePhone} from './validators'
import {fetchTracksByArtist, resetState} from '../actions/demo';
import './form.css';

export class InputForm extends React.Component {

    onSubmit(values) {
        const { artist, phone } = values;
        this.props.dispatch(fetchTracksByArtist(artist, phone));
    }


    resetList(e) {
        e.preventDefault();
        this.props.dispatch(reset('search'));
        this.props.dispatch(resetState());

    }

    render() {
        return (
            <div className='form-div'>
                {/* <section id='js-top-link' className="top al_left">
                        </section> */}
                        <p className='font_l'>We'll text you<br />Artist's Demo Tape</p>
                        <p className='font_m ind_l'>Please submit your request here</p>
                        {/* <button onClick="" type="submit" className="btn_black ind_l">
                        </button> */}
                        {/* <div className='mg_top'></div> */}

                <form className="mgt-2" onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
                        <div className="title">
                        {/* We'll Text You Top Track of the Artist */}<br />
                            {/* <a href="reset" className="hd" onClick={e => this.resetList(e)}>Reset Form ></a> */}
                        </div>

                        <Field
                            component={Input} 
                            label=""
                            type="text" 
                            name="artist"
                            placeholder="Artist (e.g. Bruno Mars)"
                            className="ip"
                            validate={[required, nonEmpty]}
                        />

                        <br />

                        <Field
                            component={Input} 
                            label=""
                            type="text" 
                            name="phone"
                            placeholder="Phone Number"
                            className="ip"
                            validate={[required, validPhone]} 
                            normalize={normalizePhone}
                        />

                        <div className='sms_note'>
                        * Note: Unfortunately, Twilio's trial SMS does not work with unverified phone numbers. If your number is not registered, please feel free to test with my number (215-347-0245). 
                        </div>
                        <br />

                        <button
                            type="submit"
                            className="btn_black"
                            disabled={this.props.pristine || this.props.submitting}>
                            Send
                        </button>                            
                        <a href="reset" className="hd" onClick={e => this.resetList(e)}>Reset Form ></a>
                        {/* <div className="clr"></div> */}
                </form>
            </div>

        );
    }

}

export default reduxForm({
        form: 'search',
        onSubmitFail: (error, dispatch) => dispatch(focus('search', Object.keys(error)))
    })(InputForm);

