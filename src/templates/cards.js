import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import RecipeCardList from '../components/RecipeCardList'

class CardRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const finalLetter = totalCount === 1 ? 'a' : 'e';
    const tagHeader = `${totalCount} ricett${finalLetter}`
    const cards = posts.map((post) => (
      <RecipeCardList card={{ id: post.node.id, featuredimage: post.node.frontmatter.featuredimage, title: post.node.frontmatter.title, slug: post.node.fields.slug, tags: post.node.frontmatter.tags, excerpt: post.node.excerpt }} />))

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                {cards}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CardRoute

export const cardPageQuery = graphql`
  query CardPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { card: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            title
            featuredimage{
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
