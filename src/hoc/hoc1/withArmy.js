import React from 'react'

const Army = (Men,gunname)=>{
class NewMan extends React.Component{
    state={
        gunshots:5
    }
    handleGunShots=()=>{
        this.setState({gunshots:this.state.gunshots + 1})
    }
    render(){
        return <Men gunName={gunname}gunShots={this.state.gunshots} handleGunShots={this.handleGunShots} {...this.props}/>
    }
}
return NewMan;
}

export default Army;