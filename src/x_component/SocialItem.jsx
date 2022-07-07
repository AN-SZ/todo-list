import React from 'react';

function SocialItem(props){
    return(
         
    <li className="list-group-item">
         <img src={props.p.img} alt={props.p.media} />

        <input type="checkbox" id={`icon-of-${props.p.id}`}/>
        <label>{props.p.media}</label>
    </li>

    );
}

export default SocialItem;