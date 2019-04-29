import React, {useState, useEffect } from 'react';
import './list-sec.css';

export default function ListItem(props) {

    const { name, album, date, popularity, preview } = props.item;
    const [id, setId] = useState(preview);
    const [collapse, setCollapse] = useState(false);    // make default view collapsed

    if (preview !== id) {   // collapse if the list is updated
        setCollapse(false);
        setId(preview);
    }

    function toggleCollapse(e) {
        e.preventDefault();
        setCollapse(!collapse); // toggle collapse setting
    }

    function markKey(txt) {
        if (!props.keyLower) return txt;
        
        const offSet = txt.toLowerCase().search(props.keyLower);
        if (offSet < 0) return txt;

        const part1 = (offSet === 0) ? "" : txt.slice(0, offSet);
        const part2 = txt.slice(offSet, offSet + props.keyLower.length);
        const part3 = (txt.length === offSet + props.keyLower.length) ? "" :
                txt.slice(offSet +  props.keyLower.length);
        
        // space issue fixed
        const sp1 = part1.slice(-1)[0] === " " ? <span>&nbsp;</span> : "";
        const sp2 = part3[0] === " " ? <span>&nbsp;</span> : "";

        return <React.Fragment>{part1}{sp1}<span className='r'>{part2}</span>{sp2}{part3}</React.Fragment>;
    }

    return (
        <React.Fragment>
        { collapse ? 
            <React.Fragment key={`${props.index}d`} >
            <li key={`${props.index}c`} className='li_main bd_bot'>
                <div className='w1'>{markKey(name)}</div>
                <div className='w1'>{markKey(album)}</div>
                <div className='w2 al-c'>&nbsp;<a onClick={e => toggleCollapse(e)} href="collapse" className='thin'>Collapse ></a></div>
            </li>
            <li className='li_main bd_bot detail mgt-n'>
                <div className='ind-l flt'><br />
                <span className='detail-c'>Released Date:</span> {date}
                </div>
                <div className='ind-l flt'><br />
                <span className='detail-c'>Popularity:</span> {popularity}
                </div> 
                <div className='ind-l flt'><br />
                { preview ? 
                    <audio controls className='player'>
                        <source src={preview} type="audio/mpeg" />
                        Your browser doesn't support
                    </audio>
                :   
                    <div>             
                        <span className='detail-c'>Preview:</span> N/A
                    </div>
                }
                </div>
                <div className="clr"></div>
            </li>

            </React.Fragment>
        :
            <li key={`${props.index}c`} className='li_main bd_bot'>
                <div className='w1'>{markKey(name)}</div>
                <div className='w1'>{markKey(album)}</div>
                <div className='w2 al-c'>&nbsp;<a onClick={e => toggleCollapse(e)} href="uncollapse" className='thin'>Preview ></a></div>
            </li>            
        }
        </React.Fragment>
    );
}
