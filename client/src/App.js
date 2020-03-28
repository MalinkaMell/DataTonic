import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Body from './components/layout/body/Body';
import Dashboard from './pages/Dashboard';
import Score from './pages/Score';
import Statistics from './pages/Statistics';
import Analytics from './pages/Analytics';
import Forecasts from './pages/Forecasts';
import NoMatch from './pages/Nomatch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Body>
        <Switch>
          <Route exact path="/"> <Dashboard /> </Route>
          <Route path="/score"> <Score /> </Route>
          <Route path="/statistics"> <Statistics /> </Route>
          <Route path="/analytics"> <Analytics /> </Route>
          <Route path="/forecasts"> <Forecasts /> </Route>
          <Route> <NoMatch /> </Route>
        </Switch>
      </Body>
      <Footer />
    </Router>
  );
}

export default App;
