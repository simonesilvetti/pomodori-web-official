import React from 'react'
import { FaInstagram } from "react-icons/fa"

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

class ShareGlovesBadge extends React.Component {
    render() {
        const { data } = this.props
        return (
            <a href="https://www.instagram.com/pomodorialsole/">
                <div className="container">
                    <Img fluid={data.file.childImageSharp.fluid} />
                    <div class="subtitle centered has-text-centered	">
                        Condividi la tua esperienza
                    <br />
                    @pomodorialsole
                    <br />
                        <FaInstagram />
                    </div>
                </div>
            </a>
            // <img
            //     src={glovesImage}
            //     alt="Instagram Page"
            //     style={{ width: '300px', height: '300px' }}
            // />
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
        query {
        file(relativePath: { eq: "components/glove_instagram.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 300,maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      `}
        render={(data) => <ShareGlovesBadge data={data} />}
    />
)
