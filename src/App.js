import { useState } from 'react';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform.js';
import Alerts from './components/Alerts.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import About from './components/About.js';


function App() {
  const [mode,setMode]= useState('light')
  const[alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
    setAlert({msg:msg, type:type});
    setTimeout(()=>{setAlert(null);},2000)
  }

  const togglemode=()=>{
    if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor="#03013f"; 
        showAlert("Dark mode enabled","success");
        // document.title="Dark Mode"
      }
    else
      {
        setMode('light');
        document.body.style.backgroundColor="white"; 
        showAlert( "Light mode enabled","success");
        
      }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} title='TextUtils' home='Home' togglemode={togglemode}/>
      <div> <Alerts alert={alert} /></div>
      <div className="container">
          {/* <Routes>
            <Route exact path="/" */}
              <Textform heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
            {/* <Route path="/about" element={<About />} />
          </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
