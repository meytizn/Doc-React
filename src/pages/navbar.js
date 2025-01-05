
import React from 'react'
import { Link } from 'react-router-dom'




export const Nabvar = () => {

  return (
    <div>
      <header style={{ backgroundColor: "black", width: "100%" }}>
        <Link to='/' style={{ color: "red", display: "inline-block", }}>home</Link>
        <Link to='about/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>about</Link>
        <Link to='contact/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>contact</Link>
        <Link to='profile/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>profile</Link>
        <Link to='usecontext/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }}>useContext</Link>
        <Link to='react-query/' style={{ color: "red", display: "inline-block", marginLeft: "30px" }} >react-query</Link>
       <Link to="custom-hook/"  style={{ color: "red", display: "inline-block", marginLeft: "30px" }} >Custom-hooker</Link>
      </header>
    </div>
  )
}