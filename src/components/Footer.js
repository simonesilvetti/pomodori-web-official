import React from 'react'
import Logo from './Logo'
//import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-white-ter">
        {/* <div className="content has-text-centered">
          <Logo />

        </div> */}
        <div className="content has-text-centered has-background-primary has-text-white-ter">
          <div className="container has-background-primary has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column social is-centered">
                {/* <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                <Logo />
                <a title="instagram" href="https://www.instagram.com/pomodorialsole/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
