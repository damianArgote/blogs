import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/home/Header';
import Navegacion from './components/home/Navegacion';
import Home from './components/home/Home';

import Detalle from './components/detalle/Detalle';
import Publicar from './components/formularios/Publicar';
import Editar from './components/formularios/Editar';

function App() {
  return (

    <Router>
      <Navegacion/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalles/:id' component={Detalle}/>
        <Route exact path='/nuevo-post' component={Publicar} />
        <Route exact path='/editar-post/:id' component={Editar} />
      </Switch>
    </Router>
    
  );
}

export default App;
