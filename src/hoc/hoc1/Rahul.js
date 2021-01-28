import React from 'react'
import Army from './withArmy';

class Rahul extends React.Component{
   
    render(){
    
  return(
        <div>
          <h2>CampName: {this.props.camp}</h2>
            <h3 onMouseOver={this.props.handleGunShots}>Rahul fired {this.props.gunShots} gunshots with {this.props.gunName}</h3>
        </div>
  );
    
    }

}

export default Army(Rahul,"Ak47");
