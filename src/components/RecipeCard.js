import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import VegetarianToolTip from './recipe/VegetarianToolTip'


class RecipeCard extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="container.is-max-desktop">
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-4" key={post.id}>
                <article
                  className='blog-list-item tile is-child is-vertical box'
                >
                  <div className="tile is-child">
                    {post.frontmatter.featuredimage ? (
                      <div>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="tile is-child">
                    <div className="post-meta">
                      <Link
                        className="title has-text-black is-size-3"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}{post.frontmatter.tags.includes("vegetariano") ? <VegetarianToolTip /> : null}
                      </Link>
                    </div>
                    <span></span>
                    {post.excerpt}
                  </div>

                  {/* <p>
                <Link className="button" to={post.fields.slug}>
                  Continua a leggere →
                </Link>
              </p> */}
                </article>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

RecipeCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RecipeCardQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecipeCard data={data} count={count} />}
  />
)