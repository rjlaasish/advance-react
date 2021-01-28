import React from 'react'
import Army from './withArmy';

class Priti extends React.Component{
    
    render(){
    
  return(
        <div>
            <h2>Camp Name: {this.props.camp}</h2>
            <h3 onMouseOver={this.props.handleGunShots}>Priti fired {this.props.gunShots} gunshots with {this.props.gunName}</h3>
        </div>
  );
    
    }

}

export default Army(Priti,"M416");
