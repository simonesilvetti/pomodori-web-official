import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import RecipeRoll from '../components/RecipeRoll'
import DemoCarousel from '../components/DemoCarousel';


export const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
  intro,
}) => (
    <div className="container">
      <div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div class="tile is-ancestor">
                    <div class="tile is-vertical">
                    <div className="tile">
                    <div class="tile is-parent">
                          <div class="tile is-child">
                          <DemoCarousel />
                          </div>
                        </div>
                      </div>
                      <div className="tile">
                      <div class="tile is-parent">
                          <article class="tile is-child box">
                            <figure class="image is-4by3">
                              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                            </figure>
                          </article>
                        </div>
                        <div class="tile is-parent">
                          <article class="tile is-child box">
                            <figure class="image is-4by3">
                              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                            </figure>
                            <p class="title">Titolo</p>
                          </article>
                        </div>
                        <div class="tile is-parent">
                          <article class="tile is-child box">
                            <figure class="image image is-4by3 has-ratio">
                              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                            </figure>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content">
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
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Ultime Ricette
                  </h3>
                    <RecipeRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/recipes">
                        Read more
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
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
              markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
              frontmatter {
              heading
        mainpitch {
              title
          description
        }
        description
        intro {
              blurbs {
              image {
              childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
