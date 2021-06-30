import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/employeeDetail';
import GetAllEmployee from './Components/getAllEmployee';
import './App.css';


const App = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route  path="/getEmployee">
        <GetAllEmployee />
      </Route>

    </>

  )
}

export default App;

