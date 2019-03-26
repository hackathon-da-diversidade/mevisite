import React from 'react';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import './App.css';

const App = () => {
  let Home = () => <div>Home</div>
  let Indique = () => <div>Indique um lar</div>
  let Lares = () => <div>Lares</div>
  let Quemsomos = () => <div>Quem Somos</div>

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="indique">Indique um lar</Link>
        <Link to="lares">Lares</Link>
        <Link to="quemsomos">Quem somos</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Indique path="indique" />
        <Lares path="lares" />
        <Quemsomos path="quemsomos" />
      </Router>
    </div>
  )
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
