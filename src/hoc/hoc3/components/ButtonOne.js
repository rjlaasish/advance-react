import React from 'react'
import styleWrapper from '../HOC/stylesWrapper';



const ButtonOne = (props) => {
    return (
        <button style={props.style}>I am ButtonOne</button>
    )
}

export default styleWrapper(ButtonOne);