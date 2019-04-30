import React from 'react';
import InputForm from './input-form';

export default function HeaderSec(props) {
    // const [user, setUser] = useState('');
    // const [showLogin, setShowLogin] = useState(false);

    // const eventContext = useContext(EventContext);


    return (
        <React.Fragment>  
            <header className='banner fi'>
                {/* <div className='row'> 
                    <div id='js-main' className='col-12'>
                        <section id='js-top-link' className="top al_left">
                        </section>
                        <p className='font_el ind_l mg_top'>Looking for<br />Software Engineer Jobs?</p>
                        <p className='font_m ind_l'>Please drop your resume here</p> */}
                        <InputForm /> 
                        {/* <button onClick="" type="submit" className="btn_black ind_l">
                        </button>
                        <div className='mg_top'></div>
                    </div>
                </div> */}
            </header>
            <div id="content-top"></div>
        </React.Fragment>  
    );

}
