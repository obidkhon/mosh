
import React, { Component } from 'react'
import './App.css'
import User from './comonents/User'
import User1 from './comonents/User1'
import User2 from './comonents/User2'
import UserGreeting from './comonents/UserGreeting'
 class App extends Component {
  render() {
    return (
      <div className='App'>
<UserGreeting/>
<User/>
<User1/>
<User2></User2>

      </div>
    )
  }
}

export default App
