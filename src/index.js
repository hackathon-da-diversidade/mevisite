import React from 'react';
import * as serviceWorker from './serviceWorker'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'
import './index.css'

import PaginaHome from './pages/home/home'
import Header from './components/header/header'

const PaginaIndique = () => <div>Indique um lar</div>
const PaginaLares = () => <div>Lares</div>
const PaginaQuemsomos = () => <div>Quem Somos</div>

const App = () => {

  return (
    <>
      <Header />
      <Router>
        <PaginaHome path="/" />
        <PaginaIndique path="indique" />
        <PaginaLares path="lares" />
        <PaginaQuemsomos path="quemsomos" />
      </Router>
    </>
  )
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
