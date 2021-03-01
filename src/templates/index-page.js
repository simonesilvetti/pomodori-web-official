import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import RecipeRoll from '../components/RecipeRoll'
import IndexBackgroundImage from '../components/background/IndexBackgroundImage'
import Img from "gatsby-image"
import { v4 } from 'uuid'
import { kebabCase } from 'lodash'


const Column = ({ column }) => (
  <div className="tile is-parent">

    <article className="tile is-child">
      <Link to={`/cards/${kebabCase(column.card)}/`}>
        <figure className="is-4by3">
          <Img
            fixed={column.image.childImageSharp.fixed}
            alt={column.title}
          />
        </figure>
        <p className="title is-4 has-text-centered">
          {column.title}
        </p>
        <span />
      </Link>
      <p className="is-6 has-text-justified px-3">{column.text}</p>
      <div className="has-text-centered">
      </div>
    </article>
  </div>
);


export const IndexPageTemplate = ({
  columns
}) => (
    <div className="container">
      <IndexBackgroundImage className="full-width-image-container margin-top-0 bg-mobile-fixed-auto" />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                      <div className="tile">
                        {columns.map(column => <Column key={v4()} column={column} />)}
                      </div>
                    </div>
                  </div>


                  {/* <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                    </Link>
                    </div>
                  </div> */}


                  <div className="column is-12">
                    <p className="section title has-text-centered">Ultime Ricette</p>
                    <RecipeRoll />
                    <div className="column is-12 has-text-centered">
                      <Link to="/recipes">
                        <button className="button is-link is-outlined">Visualizza le altre ricette</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        columns={frontmatter.columns}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      columns {
        image{
          childImageSharp{
            fixed(width: 240, height: 240,quality:80) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        text
        title
        card
      }
    }
  }
}
`


