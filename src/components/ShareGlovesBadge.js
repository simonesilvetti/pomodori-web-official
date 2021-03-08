import React from 'react'
//import { FaInstagram } from "react-icons/fa"

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

class ShareGlovesBadge extends React.Component {
    render() {
        const { data } = this.props
        return (
            <a href="https://www.instagram.com/explore/tags/conpomodorialsole/">
                <div className="container">
                    <Img fluid={data.file.childImageSharp.fluid} />
                    {/* <div className="subtitle is-size-4 centered has-text-centered has-text-weight-bold">
                        Condividi la tua esperienza
                    <br />
                    #conpomodorialsole
                    <br />
                        <FaInstagram />
                    </div> */}
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
        file(relativePath: { eq: "components/ig.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid 
            }
          }
        }
      }
      `}
        render={(data) => <ShareGlovesBadge data={data} />}
    />
)
