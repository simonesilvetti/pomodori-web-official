import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Img from "gatsby-image"



const ImagesSection = ({ images }) => (images ?
    <div className="tile is-parent">
        {images.map((image) => (
            <div className="tile is-parent is-4" key={v4()}>
                <div className="tile is-child">
                    <Img className=" is-square"
                        fluid={image.image.childImageSharp.fluid}
                        alt="Recipe Shot"
                    />
                    {/* <img src={image.image.childImageSharp.fluid.src} alt="Recipe Shot"></img> */}
                </div>
            </div>
        ))}
    </div> : null
)

ImagesSection.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            step: PropTypes.string,
        })
    ),
}

export default ImagesSection