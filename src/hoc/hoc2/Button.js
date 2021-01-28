import React, { Component } from 'react'
import HOCofCounter from './HocofCounter'

class Button extends Component {
  
    render() {
        return (
            <div>
                <button onClick={this.props.handleChange}>Clicked {this.props.countValue  } times</button>
            </div>
        )
    }
}

export default HOCofCounter(Button);