import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import "@fontsource/lato" //all text
import "@fontsource/shadows-into-light" //Logo
import "@fontsource/amatic-sc" //recipe title
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description, siteUrl } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="it" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={siteUrl + '/img/apple-touch-icon.png'}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${withPrefix('/')}img/logo_new.svg`}
        />
        <link rel="alternate icon"
          href={`${withPrefix('/')}img/logo_new.ico`}
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:image" content={siteUrl + '/img/logo_new.svg'} />
        <meta property="og:image:alt" content={title} />
        <meta property="fb:app_id" content="891391494955515" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper