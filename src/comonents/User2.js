import React, { Component } from 'react'

export class User2 extends Component {


constructor(props) {
    super(props)

    this.state = {
         massage:true
    }
}




    render() {

        return this.state.massage&&<div><h1> hush kelibsen olima</h1> </div>
    }
}

export default User2
