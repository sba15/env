import React, { useState } from "react"
import "./styles.scss"
import { nav } from "../../data"
import { Link } from "react-router-dom"
import img from "../../assets/images/sbalogo.svg"

const Navbar = () => {
  const [navList, setNavList] = useState(false)

  return (  
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={img} alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

