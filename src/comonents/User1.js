import React, { Component } from 'react'

export class User1 extends Component {


constructor(props) {
    super(props)

    this.state = {
         massage :false
    }
}





    render() {
    
        return (
            this.state.massage?
            <div>
            <h1>  assalomu alaycom ! </h1>
            </div> :
            <div>
            <h1> Va alaycum assalom</h1>
            </div> 
                
        
        )
    }
        
    }


export default User1
