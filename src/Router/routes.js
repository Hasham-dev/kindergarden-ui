import React from 'react'
import {
  // BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Switch>

  )
}
