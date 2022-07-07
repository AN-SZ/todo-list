import React from 'react';
import TeamMember from './TeamMember';

function Team(){
    return(
        <div className='row'>
        <TeamMember 
        info={
            {
                 image:"images/02.jpg",
                 name:"Walter White",
                 email:"walter@gmail.com",
                 /*website:"walterwhite.website.com"*/


            }
        }/>

        <TeamMember 
        info={
            {
                 image:"images/07.jpg",
                 name:"Max black White",
                 email:"walter@gmail.com",
                 website:"maxblack.website.com"


            }
        }/>

        <TeamMember 
        info={
            {
                 image:"images/04.jpg",
                 name:"Jaffer hardt",
                 email:"walter@gmail.com",
                 website:"jaffeerhardt.website.com"


            }
        }/>

        <TeamMember 
        info={
            {
                 image:"images/05.jpg",
                 name:"Jaffer hardt",
                 email:"walter@gmail.com",
                 website:"jaffeerhardt.website.com"


            }
        }/>

        <TeamMember 
        info={
            {
                 image:"images/07.jpg",
                 name:"Jaffer hardt",
                 email:"walter@gmail.com",
                 website:"jaffeerhardt.website.com"


            }
        }/>

        <TeamMember 
        info={
            {
                 image:"images/04.jpg",
                 name:"Jaffer hardt",
                 email:"walter@gmail.com",
                 website:"jaffeerhardt.website.com"


            }
        }/>


    
        </div>



    );
}

export default Team;