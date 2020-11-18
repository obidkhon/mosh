import React, { Component } from 'react'

export class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
          lslogedIn: true
    }
}





    render() {
        if(this.state.lslogedIn){
            return(  <div> <h1> welcom Obid</h1>  </div>  )
        }
        else{
            return(
                <div> <h1>  welcom mwhmon</h1></div>
            )

        }
        //return (
            //<div>
               // <div> <h1> welcom Obid</h1></div>
               // <div> <h1></h1></div>
           // </div>
       // )
    }
}

export default UserGreeting
