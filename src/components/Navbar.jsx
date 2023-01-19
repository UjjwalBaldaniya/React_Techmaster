import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TECHMASTER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink className="nav-link" aria-current="page" to={"/#home"}>Home</HashLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/contact"}>Contact</Link>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" aria-current="page" to={"/#about"}>About</HashLink>
        
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" aria-current="page" to={"/#brands"}>Brands</HashLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/services"}>Services</Link>
              </li>


            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
