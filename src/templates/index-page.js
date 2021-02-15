import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import RecipeRoll from '../components/RecipeRoll'
import tradizioni from '../img/tradizioni.png'
import stagioni from '../img/stagioni.jpg'
import pomodori from '../img/pomodoro_tutte_salse.png'
import mainImange from '../img/jumbotron.jpg'



export const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
  intro,
}) => (
    <div className="container">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: "url(" + mainImange + ")"
        }}
      >
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                      <div className="tile">
                        <div className="tile is-parent">
                          <article className="tile is-child">
                            <figure className="image is-4by3">
                              <img src={stagioni} alt="Stagioni"></img>
                            </figure>
                            <p className="title is-4 has-text-centered">Stagioni</p>
                            <span />
                            <p className="is-6 has-text-justified px-3"> Il susseguirsi delle stagioni ci permette di poter gustare frutta e verdura, nonchè pescato di vario tipo, che cambiano in sapore, colore e proprietà nutritive. In questa sezione troverete una serie di ricette in cui gli accostamenti tra le materie prime rispettano i ritmi della natura.</p>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child">
                            <figure className="image is-4by3">
                              <img src={tradizioni} alt="Tradizioni"></img>
                            </figure>
                            <p className="title is-4 has-text-centered">Tradizioni</p>
                            <span />
                            <p className="is-6 has-text-justified px-3">Crediamo nella stagionalità di frutta e verdura. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the </p>

                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child">
                            <figure className="image is-4by3">
                              <img src={pomodori} alt="Pomodori"></img>
                            </figure>
                            <p className="title is-4 has-text-centered">Pomodoro.. in tutte le salse</p>
                            <span />
                            <p className="is-6 has-text-justified px-3">Ciliegino, San Marzano, cuore di bue... giallo, verde, rosso... da insalata, da salsa, da essiccare..il pomodoro è forse l’emblema della cucina italiana! Vi proponiamo una serie di ricette, alcune classiche ed altre più innovative, che lo vedono protagonista.</p>

                          </article>
                        </div>
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
                      <Link className="btn" to="/recipes">
                        Visualizza le altre  ricette
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
  //const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
      // heading={frontmatter.heading}
      // mainpitch={frontmatter.mainpitch}
      // description={frontmatter.description}
      // intro={frontmatter.intro}
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

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//               markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
//               frontmatter {
//               heading
//         mainpitch {
//               title
//           description
//         }
//         description
//         intro {
//               blurbs {
//               image {
//               childImageSharp {
//               fluid(maxWidth: 240, quality: 64) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `
