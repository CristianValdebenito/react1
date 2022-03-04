import React, {Component} from 'react';

class PersonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edad: this.props.edad
        }; 
    }
    cambiarEdad = () => {
        this.setState({ edad: this.state.edad + 1 });
        {console.log(this.state.edad)}
    }
    render(){
        
        return (
            <div>   
                <div><h1>{ this.props.nombre } { this.props.nombre2 }</h1></div>
                <div>Edad: { this.state.edad }</div>
                <div>Color de pelo: { this.props.pelo }</div>
                <button onClick={ this.cambiarEdad }>Boton de Cumpleaños</button>
                    
            </div>
        );
    }

}
export default PersonCard;
