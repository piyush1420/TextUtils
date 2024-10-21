
import React from 'react'
// import {a, Router} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li className="nav-item">
  <a className="nav-link" href="#" style={{ color: props.mode==='light'?'black':'white' , textDecoration: 'none' }}>
    {props.home}
  </a>
</li>
        {/* <li className="nav-item">
           <a className="nav-a" href="#">{props.about}</a>
        </li>  */}
        
        {/* <li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-a disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>

    </>
  );
}
Navbar.propTypes={title: PropTypes.string.isRequired, about :  PropTypes.string}
Navbar.defaultProps={title : 'Set Title', about: 'Set about'}
//isRequired means it must not be undefined 