import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import PreparationSteps from '../components/recipe/PreparationSteps'
import ImagesSection from '../components/recipe/ImagesSection'
import RecipeInfo from '../components/recipe/RecipeInfo'
import useSiteMetadata from '../components/SiteMetadata'
import ShareGlovesBadge from '../components/ShareGlovesBadge'
import richResult from '../components/recipe/RichResult'
import Img from "gatsby-image"


export const RecipePostTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  difficulty,
  time,
  featuredImage,
  images,
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
              <figure className="image">
                <Img className=" is-square"
                  fluid={featuredImage}
                  alt="Recipe"
                />
                {/* <img className=" is-square" src={featuredImage} alt="Recipe"></img> */}
              </figure>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <RecipeInfo title={title} blogger={blogger} difficulty={difficulty} time={time} dose={dose} ingredients={ingredients} vegetarian={tags.includes("vegetariano")} />
          </div>
        </div>

        <div className="section">
          <div className="title is-size-3">PROCEDURA</div>
          {/* <PostConLinktent content={content} /> */}
          <PreparationSteps preparationSteps={preparationSteps}></PreparationSteps>
        </div>
        <ImagesSection images={images}></ImagesSection>
        <div className="section">
          <div class="columns">
            <div class="column is-two-thirds">
              <div className="title is-size-3">Tags</div>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                      <div className="tag is-medium ">
                        {tag}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div class="column">
              <ShareGlovesBadge />
            </div>
          </div>



        </div>
      </div>

      {/* <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
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
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout>
      <RecipePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Pomodori al sole">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={post.frontmatter.description} />
            <meta property="og:image" content={siteUrl + post.frontmatter.featuredimage.childImageSharp.fluid.src} />
            <meta property="og:image:alt" content={post.frontmatter.title} />
            <meta name="keywords" content={["ricetta", "cibo", "italia"].concat(post.frontmatter.tags.toString())} />
            {richResult(post.frontmatter)}
          </Helmet>
        }
        title={post.frontmatter.title}
        difficulty={post.frontmatter.difficulty}
        time={post.frontmatter.time}
        featuredImage={post.frontmatter.featuredimage.childImageSharp.fluid}
        images={post.frontmatter.images}
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
          description
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          images {
            image{
              childImageSharp{
                fluid(maxWidth: 600, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
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