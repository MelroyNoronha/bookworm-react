import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import Homepage from './components/HomePage'
import LoginPage from './components/LoginPage'

const App = () => (
  <div>
    <Route path="/" exact component={Homepage}/>
    <Route path="/login" exact component={LoginPage}/>
  </div>
)

export default App
