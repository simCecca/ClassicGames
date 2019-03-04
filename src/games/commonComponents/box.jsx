import React, { Component } from 'react'

class Box extends Component{

    handleColor(){
        /*let style = (this.props.style) ? this.props.style(this.props.index) : {};
        if(this.props.winners.includes(this.props.index)) {
            style = {color: "green", border: "0.1em solid green"};
        }
        if(this.props.color !== undefined)
            style.background = this.props.color;
        return style;*/
    }

    render(){
        return (
            <button className={ this.props.name } key = { this.props.index } onClick={ this.props.onClick } style={this.props.style(this.props.index)}>
                { this.props.value }
            </button>
        );
    }
}

export default Box;