import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/#">Project Mgt App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/#">Link</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">Link</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">Link</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
