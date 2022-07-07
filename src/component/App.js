import React, {Component}from 'react';

class App extends Component{

    constructor(){
        super();
        this.state= {
            number: 1
        }
         this.increaseNumber = this.increaseNumber.bind(this);
    }


    // Funktion 1 --> increase
     increaseNumber(){     
        this.setState(prevState =>{
            return {number: prevState.number + 1}
     });
    }

     // Funktion 2 --> decrease
     decreaseNumber=()=>{

        this.setState(prevState =>( {number: prevState.number - 1}))

     };


    render(){
        return(
            <div>
              <h1>{this.state.number}</h1>
              <button onClick={this.increaseNumber}>increase button!</button>


              <button onClick={this.decreaseNumber}>decrease button!</button>
            </div>
        );
    }
}

export default App;