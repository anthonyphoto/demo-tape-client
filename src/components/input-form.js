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
            <form className="mgt-2" onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values))}>
                    <div className="title">We'll Text You Top Track of the Artist
                        <a href="reset" className="title" onClick={e => this.resetList(e)}>Reset Form ></a>
                    </div>

                    <Field
                        component={Input} 
                        label=""
                        type="text" 
                        name="artist"
                        placeholder="Artist (e.g. Bruno Mars)"
                        className="flt"
                        validate={[required, nonEmpty]}
                    />

                    <Field
                        component={Input} 
                        label=""
                        type="text" 
                        name="phone"
                        placeholder="Phone Number"
                        className="flt"
                        validate={[required, validPhone]} 
                        normalize={normalizePhone}
                    />
    
                    <button
                        type="submit"
                        className="flt"
                        disabled={this.props.pristine || this.props.submitting}>
                        Send
                    </button>
                    <div className="clr"></div>
                </form>
        );
    }

}

export default reduxForm({
        form: 'search',
        onSubmitFail: (error, dispatch) => dispatch(focus('search', Object.keys(error)))
    })(InputForm);

