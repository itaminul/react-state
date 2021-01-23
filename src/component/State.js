import React from 'react';

class State extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            javascript : "React create looks good user intrface",
            PHP : 'PHP is a dynamic language'
        }
    }

    changeLanguage = () => {
        this.setState({
            react: 'React js create app in many components, component is a peace, reusable.'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.javascript}</h1>
                <h1>{this.state.PHP}</h1>
                <h1>{this.state.react}</h1>
                <button type="button" onClick={this.changeLanguage}>Change Language</button>
            </div>
        )
    }
}


export default  State;