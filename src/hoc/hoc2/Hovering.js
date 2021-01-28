import React, { Component } from 'react'
import HOCofCounter from './HocofCounter'

class Hovering extends Component {
    
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.handleChange}>Hovered {this.props.countValue} times</h2>
            </div>
        )
    }
}

export default HOCofCounter(Hovering);