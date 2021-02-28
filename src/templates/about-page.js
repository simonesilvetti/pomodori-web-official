import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

export const AboutPageTemplate = ({ title, image, content, contentComponent, backGroundImage }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container">
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
                <PageContent className="content" content={content} />
            </div>
          </div>
          <div className="column is-4">
            <div className="section">
              <figure className="image">
                <Img className="is-square box"
                  fluid={image}
                  alt="Nonna"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post, file } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image.childImageSharp.fluid}
        content={post.html}
        backGroundImage={file.childImageSharp.fluid}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    file(relativePath: { eq: "components/glove_instagram.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300,maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image{
          childImageSharp{
            fluid(maxWidth: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`