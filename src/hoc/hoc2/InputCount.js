import React, { Component } from 'react'
import HOCofCounter from './HocofCounter'

class InputCount extends Component {
   
    render() {
        return (
            <div>
                <input onKeyPress={this.props.handleChange}/> <br/>
                    Typed {this.props.countValue} times
            </div>
        );
    }
}

export default HOCofCounter(InputCount);
