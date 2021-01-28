import React from 'react';


const HOCofCounter = WrappedComponent=>{
    class NewComponent extends React.Component{
        state={
            counter:0
        }
        handleChange=()=>{
            this.setState(prevState=>{
                return {counter:prevState.counter+1}
            })
        }
        render(){
            return <div>
                <WrappedComponent countValue={this.state.counter} handleChange={this.handleChange}/>
                </div>;
        }
    }
    return NewComponent;
}

export default HOCofCounter;