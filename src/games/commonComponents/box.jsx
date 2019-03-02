import React, { Component } from 'react'

class Box extends Component{

    handleColor(){
        let style = (this.props.style) ? this.props.style(this.props.index) : {};
        if(this.props.winners.includes(this.props.index))
            style = {background : "green"};
        if(this.props.color !== undefined)
            style.color = this.props.color;
        return style;
    }

    render(){
        return (
            <button className={ this.props.name } key = { this.props.index } onClick={ this.props.onClick } style={this.handleColor()}>
                { this.props.value }
            </button>
        );
    }
}

export default Box;