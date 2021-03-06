import React, {Component} from 'react';          
class Header extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        }; 
    }
    cambiarEstado = () => {
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
                
export default Header;