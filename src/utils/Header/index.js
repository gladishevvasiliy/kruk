import React from 'react'
import logo from '../../res/kruk.svg'


const Header = () => (
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container d-flex justify-content-between">
      <a href="" className="navbar-brand d-flex align-items-center">
        <img alt="Δομέστικος" src={logo} height="50px" />
        <strong>Δομέστικος</strong>
      </a>
    </div>
  </div>
)

export default Header
