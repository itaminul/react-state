import React from 'react';

class State extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            javascript : "React create looks good user intrface",
            PHP : 'PHP is a dynamic language'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.javascript}</h1>
                <h1>{this.state.PHP}</h1>
            </div>
        )
    }
}


export default  State;