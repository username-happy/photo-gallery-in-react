
import React from "react";

function Card(props){
    console.log(props);
    return (
    <>
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt='web-pics' className='card_img'/>
            <div className='card_info'>
                <span className='card_category'>{props.title}</span>
                <h1 className='card_title'>{props.sname}</h1>
                <a href={props.link} target="_blank">
                    <button>watch now</button>
                </a>
            </div>
        </div>
    </div>
    </>
    );
}
export default Card;