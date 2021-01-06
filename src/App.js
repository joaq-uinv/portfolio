import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
//componentes
import Home from "./componentes/Home";
import BtnsPpals from "./componentes/BtnsPpals";
import Proyectos from "./componentes/Proyectos";
import Redes from "./componentes/Redes";

function App() {
  const [ingles, setIngles] = useState(false);

  const cambiarIdioma = () => {
    setIngles(!ingles);
    // console.log(ingles);
  };

  return (
    <Router>
      <div className="App">
        <BtnsPpals ingles={ingles} cambiarIdioma={cambiarIdioma} />
        <section className="ppal">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      component={() => <Home ingles={ingles} />}
                    />
                    <Route path="/proyectos" component={Proyectos} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </section>
        <Redes />
      </div>
    </Router>
  );
}

export default App;
