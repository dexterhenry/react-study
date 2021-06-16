import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import { Usuario } from "../pages/Usuario";
import { MenuConceptos } from "./MenuConceptos";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
            <h3>About</h3>
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
            <h3>Contact</h3>
          </Route>
          <Route path="/react" component={ReactTopics} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};
