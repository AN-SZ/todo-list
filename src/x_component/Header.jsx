import React from 'react';

function Header (){

     // let title ="Design is my life !";

     // const client ="designer"


     // if(client === "Designer"){
     //      title ="Design is my life !";

     // }else{
     //      title ="programming is my life !";

     // }

     const info ={
          name: "Tim",
          nick: "jerry",
     }

    return(

         <div className="navbar bg-dark text-white rounded">

             hello {info.name} {info.nick}

         <h1>Design is my life !</h1>

              <h1 className="text-red">{5*5}</h1>
         </div>

    );
}

export default Header;