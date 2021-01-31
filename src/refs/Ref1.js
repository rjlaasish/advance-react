import React from 'react'

export default class Ref1 extends React.Component {
    render() {
       
           
                 const handleKeyUp=(target,e)=>{
        if(e.keyCode===13){
            switch(target){
                case "firstname":
                    this.lastname.focus();
                    break;
                case "lastname":
                    this.address.focus();
                    break;
                case "address":
                    this.submit.focus();
                    break;
                default:
                    this.firstname.focus();
                    
                    
            }
        }
    } 
    const handleClick=()=>{
        alert("Hey! "+this.firstname.value+" "+this.lastname.value+" you live in "+this.address.value+" ?")
    }
    return (
        <div>
           <div className="">
               <span>First Name:</span>
               <input type="text" ref={input=>this.firstname=input}
               onKeyUp={handleKeyUp.bind(this,"firstname")}/>
           </div>
           <br/>
           <div className="">
               <span>Last Name:</span>
               <input type="text" onKeyUp={handleKeyUp.bind(this,"lastname")} ref={input=>this.lastname=input}/>
           </div>
           <br/>
           <div className="">
               <span>Address :</span>
               <input type="text" onKeyUp={handleKeyUp.bind(this,"address")} ref={input=>this.address=input}/>
           </div>
           <br/>
           <button type="submit" onClick={()=>handleClick()} ref={input=>this.submit=input}>Submit</button>
    

            </div>
        )
    }
}
