import React, { Component } from 'react'

class Box extends Component{
    render(){
        return (
            <button className={ this.props.name(this.props.index) } key = { this.props.index } onClick={ this.props.onClick } style={this.props.style(this.props.index)}>
                { this.props.value }
            </button>
        );
    }
}

export default Box;