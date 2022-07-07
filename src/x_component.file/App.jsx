import React, { Component } from 'react';
import File from './File';



class App extends Component{
    // Strings = ""
    // Number = 0
    // Boolean = true/false
    
    // Array = [ value, value, value ]
    // Object = {
    //  key: value
    // }
    
    render(){
        const users = [
            { name:"porriya", name2:"moriya"},
            { name:"lili",   name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"porriya", name2:"moriya"},
            { name:"lili",   name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"lili",   name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"porriya", name2:"moriya"},
            { name:"lili",   name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"lili",  name2:"moriya"},
            { name:"Ben",  name2:"Anwer"},
        ]

        return(

            <div className=''>
               

                {/*
                HArd coding the properties
                
                <File name="porriya" name2="moriya"/>
                <File name="lili"   name2="moriya"/>
                <File name="lili"  name2="moriya"/>
                <File name="lili"  name2="moriya"/>
                <File name="porriya" name2="moriya"/>
                <File name="lili"   name2="moriya"/>
                <File name="lili"  name2="moriya"/>
                <File name="lili"  name2="moriya"/>
                <File name="lili"   name2="moriya"/>
                <File name="lili"  name2="moriya"/>
                <File name="lili"  name2="moriya"/>
                <File name="porriya" name2="moriya"/>
                <File name="lili"   name2="moriya"/>
                <File name="lili"  name2="moriya"/>
        <File name="lili"  name2="moriya"/>*/}

            {/* .map loop through an Array of Objects */}
                {/* Check if users exist &&(and) .map loop through all information and print out the <File/> */}
            {users && users.map(user => <File name={user.name} name2={user.name2}/> )}

            </div>
        );

    }
   
}
export default App;