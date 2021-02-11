import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import PreparationSteps from '../components/recipe/PreparationSteps'
import RecipeInfo from '../components/recipe/RecipeInfo'



export const RecipePostTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  difficulty,
  time,
  featuredImage,
  image,
  dose,
  ingredients,
  preparationSteps,
  tags,
  blogger
}) => {
  //const PostContent = contentComponent || Content
  //const PostIngredients = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child">
              <figure className="image is-4by3">
                <img src={featuredImage} alt = "Recipe"></img>
              </figure>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
              <RecipeInfo title={title} blogger={blogger} difficulty={difficulty} time={time} dose = {dose} ingredients={ingredients} />
          </div>
        </div> 
        Link        {/* <PostConLinktent content={content} /> */}
        <PreparationSteps preparationSteps={preparationSteps}></PreparationSteps>
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
        helmet={
          <Helmet titleTemplate="%s | Recipe">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        difficulty={post.frontmatter.difficulty}
        time={post.frontmatter.time}
        featuredImage={post.frontmatter.featuredimage.childImageSharp.original.src}
        image={post.frontmatter.image}
        dose={post.frontmatter.dose}
        ingredients={post.frontmatter.ingredientsSections}
        preparationSteps={post.frontmatter.preparationSteps}
        tags={post.frontmatter.tags}
        blogger={post.frontmatter.blogger}
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
          difficulty
          time
          featuredimage {
            childImageSharp {
              original {
                src
              }
            }
          }
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
          dose
          ingredientsSections {
            section
            ingredients
          }
          preparationSteps {
            step
          }
          tags
          blogger
        }
      }
    }
  `