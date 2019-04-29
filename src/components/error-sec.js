import React from 'react';
import './error-sec.css';


export default function ErrorSec (props) {
    const {message, code} = props.err;
    
    return (

        <div>
            <div className="row mgt-6">
                <div className="error-fixed">
                    <div className="mgt-2">
                        <img src="/img/rainy.gif" alt="error" />
                    </div>
                    <div className="err-h2 i">
                        Error:<br/>
                        {code} {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

