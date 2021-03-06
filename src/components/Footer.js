import React from 'react'
import Logo from './Logo'
import instagram from '../img/social/instagram.svg'
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

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
                <a className="social-icon" title="instagram" href="https://www.instagram.com/pomodorialsole/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a className="social-icon" title="instagram" href="https://www.facebook.com/pomodorialsole/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a className="social-icon" title="instagram" href="https://www.twitter.com/pomodorialsole/">
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <p><Logo /></p>
                <p>developed by <a title="instagram" href="https://github.com/simonesilvetti/">simonesilvetti</a></p>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
