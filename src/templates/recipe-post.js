import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreparationSteps from '../components/recipe/PreparationSteps'
import DifficultyBadge from '../components/recipe/DifficultyBadge'
import { GiTomato } from "react-icons/gi";
import ReactMarkdown from 'react-markdown'



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
  const PostContent = contentComponent || Content
  const PostIngredients = contentComponent || Content

  return (

    <section className="section">
      {console.log(difficulty)}
      {console.log(time)}
      {console.log(featuredImage)}
      {console.log(image)}
      {console.log(dose)}
      {console.log(ingredients)}
      {console.log(preparationSteps)}
      {console.log(tags)}
      {console.log(blogger)}
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
          <div className="tile is-parent is-vertical box notification">
            <article className="tile is-child">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="title" style={{ fontFamily: 'Amatic SC' }} >{title}</p>
                  <p className="subtitle pr-10">{blogger}</p>
                </div>
                <button className="button is-rounded">Salva la ricetta</button>
              </div>
              <article className="tile is-child">
                <DifficultyBadge level={difficulty} />
                <p className="pt-10">TEMPO: {time}</p>
                {/* <ReactMarkdown>{ingredients}</ReactMarkdown> */}
              </article>
            </article>

          </div>
        </div>
        {/* <PostContent content={content} /> */}
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
      {console.log(post.frontmatter.id)}
      {console.log(post)}

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