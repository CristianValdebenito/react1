import React, {Component} from 'react';               
class interruptor extends Component {
    constructor(props) {
        super(props);
        this.cambiarEstado=this.cambiarEstado.bind(this);
        this.state = {
            position: "On"
        };   
    }
    cambiarEstado = () => {
        console.log(this);
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }
    
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button onClick={ this.cambiarEstado }>Flip Switch</button>
                
            </fieldset>
        );
    }
}
                
export default interruptor;