import React from 'react';

function TeamMember(props){
    const {name, image, email, website} = props.info;
    return(
        <div className='col-md-4 border'>
            <div className='card'>
                <div className='card-header'>
                    <img style={{maxwidth:'100%'}} src={image} alt="img"/>
                </div>
                <div className="card-body"
                style={{backgroundColor:website ? 'white': 'black'}}>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{website}</p>

                </div>
            </div>
         </div>
        

    );
}

export default TeamMember; 