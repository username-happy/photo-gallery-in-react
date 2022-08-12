import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';

function ncard(val){
    return (
        <Card imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
            />
    );
}
ReactDOM.render(
    <>
        <h1 className='heading'>List of 5 images from picsum</h1>
        <div className='cont'>
            {Sdata.map(ncard)}
        </div>
    </>
    , document.getElementById('root')
);