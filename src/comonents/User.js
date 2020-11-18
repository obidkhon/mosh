import React, { Component } from 'react'

 class User extends Component {
constructor(props) {
    super(props)

    this.state = {
         oidcha:true
    }
}


    render() {
let nassage
if (this.state.oidcha) {
    nassage=<div><h1>  hello Oid   </h1></div>
}else{
    nassage=<div><h1>  salom olima  </h1></div>
}

        return (
            <div>
                <h1>{nassage}</h1>
            </div>
        )
    }
}

export default User
