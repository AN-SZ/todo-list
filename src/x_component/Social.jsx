
import React from 'react';
import SocialItem from './SocialItem';

function Social (){
    return( 
    <div >
        <ul className="list-group">

        <SocialItem 

        p= {{
            media:"Facebook",
            id:"facebook",
            img:"https://picsum.photos/200/61",

        }}

         />



        <SocialItem 

        p= {{
            media:"Youtube" ,
            id:"youtube",
            img:"https://picsum.photos/200/61",

        }}

         />

         <SocialItem 

         p= {{

         media:"Social" ,
         id:"social",
         img:"https://picsum.photos/200/62",

         }}

         />

        </ul>
    </div>

    );
}

export default Social;

/*checkbox*/