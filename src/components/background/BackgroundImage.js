import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, imageData, title }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {console.log(title)}
      {title ?
        <div
          className="title has-text-weight-bold is-size-1"
          style={{
            backgroundColor: 'rgba(255, 255, 255)',
            padding: '1rem',
          }}>
          {title}
        </div> : ""}
    </BackgroundImage>
  )
}

export const StyledBackgroundSection = styled(BackgroundSection)`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: scroll;
`

