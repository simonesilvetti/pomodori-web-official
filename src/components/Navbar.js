import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <div>
        <div className="nav-bar-logo" >
          <img className="nav-bar-logo-img" src={logo} alt="Pomodori al Sole" />
        </div>
        <div>
          <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item" title="Logo">
                  <Logo />
                </Link>
                {/* Hamburger menu */}
                <div
                  aria-hidden="true"
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start has-text-centered">
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/recipes">
                    Ricette
                  </Link>
                  {/* <Link className="navbar-item" to="/">
                    Orto
                  </Link> */}
                  <Link className="navbar-item" to="/about">
                    Chi Siamo
                  </Link>
                  {/* <Link className="navbar-item" to="/products">
                  Products
                 </Link>
                  <Link className="navbar-item" to="/blog">
                  Blog
                 </Link>
                  <Link className="navbar-item" to="/contact">
                  Contact
                 </Link>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link> */}
                </div>
                <div className="navbar-end has-text-centered">
                  <Link className="navbar-item" to="/about">
                    <FaSearch />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
