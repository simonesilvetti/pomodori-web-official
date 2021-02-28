import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledBackgroundSection } from './BackgroundImage'

export default ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        index: file(relativePath: { eq: "components/recipe-background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
    }
    `
  )
  // Set ImageData.
  const imageData = data.index.childImageSharp.fluid
  return <StyledBackgroundSection className={className} imageData={imageData} title="Ricette"/>
}