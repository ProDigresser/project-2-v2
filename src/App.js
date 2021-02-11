import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.css'

import Header from './components/Header'
import Main from './components/Main'
import Restlist from './components/Restlist'
import Rest from './components/Rest'
import Authors from './components/Authors'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/project-2/restlist/rest/:restId" component={Rest}/>
      <Route exact path="/project-2/restlist/:postcode" component={Restlist}/>
      <Route exact path="/project-2/authors/" component={Authors} />
      <Route exact path="/project-2" component={Main}/>
    </Switch>
  </BrowserRouter>
)

export default App