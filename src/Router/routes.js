import React from 'react'
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'

export default function Routes () {
  const match = useRouteMatch()
  console.log(match.path)

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Home} />
      <Route path={`${match.path}about`} component={About} />
      <Route path={`${match.path}contact`} component={Contact} />
    </Switch>

  )
}
