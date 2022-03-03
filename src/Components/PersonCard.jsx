import React, {Component} from 'react';

class PersonCard extends React.Component{
    render(){
        
        return (
            <div>
               
                <div><h1>{ this.props.nombre } { this.props.nombre2 }</h1></div>
                <div>Edad: { this.props.edad }</div>
                <div>Color de pelo: { this.props.pelo }</div>
                { this.props.children }
            </div>
        );
    }

}
export default PersonCard;
