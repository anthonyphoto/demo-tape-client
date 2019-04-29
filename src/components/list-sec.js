import React from 'react';
import {connect} from 'react-redux';
import ListItem from './list-item';
import './list-sec.css';

export function ListSec(props) {

    const filterList = props.filterList;
    const listJsx = []; // List of records in JSX

    for (let i = 0; i < filterList.length; i++) {
        listJsx.push(
            <ListItem key={i} index={i} item={filterList[i]} keyLower={props.keyLower} />
        );
    }

    if (listJsx.length === 0) return (<div className="mg-b"></div>);

    return (
        <div>
            <ul className='al_center' aria-live='polite'>
                <li className='li_main bd_bot'>
                    <div className='w1 li_title'>Track</div>
                    <div className='w1 li_title'>Album</div>
                    <div className='li_title'> </div>
                </li>
                    {listJsx}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
    filterList: state.demo.filterList,
    keyLower: state.demo.key
    }
};

export default connect(mapStateToProps)(ListSec);