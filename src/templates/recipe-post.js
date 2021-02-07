import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { GiTomato } from "react-icons/gi";


export const RecipePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredImage,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image is-4by3">
                <img src={featuredImage}></img>
              </figure>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <div className="title " style={{ display: "flex", justifyContent: "space-between" }}>
                {title}
                <button className="button is-rounded">Salva la ricetta</button>
              </div>
              <article className="tile is-child">
                <a className="subtitle px-2">Difficoltà:</a>
                <GiTomato style={{ fill: '#DE3E2D' }} />
                <GiTomato style={{ fill: '#DE3E2D' }} />
                <GiTomato style={{ fill: '#DE3E2D' }} />
                <GiTomato style={{ fill: '#DE3E2D7D' }} />
                <GiTomato style={{ fill: '#DE3E2D7D' }} />
                <p className="subtitle px-2">Tempo: 20min</p>

              </article>
            </article>

          </div>
        </div>
        <PostContent content={content} />
      </div>

      {/* <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div> */}
    </section>
  )
}

RecipePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RecipePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Recipe">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredimage.childImageSharp.original.src}
      />
    </Layout>
  )
}

RecipePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RecipePost

export const pageQuery = graphql`
    query RecipePostByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          featuredimage {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  `