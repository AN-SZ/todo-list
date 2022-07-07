import React, {Component} from 'react';

class File extends Component{
    method(name2){
        return <h1>{name2}</h1>
    }



    //  render(){
    //    const name2="Alex"
    //    const name=this.method("moriy")
    //     return(
          
    //         <h1>{name} {name2}</h1>
    
    //     )
    // }
    
    render(){

         return(
           
             <h1>{this.props.name} {this.props.name2}</h1>
     
         )
     }
    }

   

export default File