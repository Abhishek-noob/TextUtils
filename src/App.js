
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setmode] = useState('light')

  const toggle =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      document.title = "TextUtils - Dark Mode"
  
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white"
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    <Router>
   <Navbar AboutText="About" mode={mode} toggle={toggle}/>
   
   <div className="container my-3">
   <Switch>
          <Route path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForms heading="Enter The Text to Analyze Below" mode={mode}/>
          </Route>
        </Switch>
   </div>
   </Router>
    </>
  );
}

export default App;
