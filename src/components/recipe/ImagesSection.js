import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'


const ImagesSection = ({ images }) => (images ?
    <div className="tile is-parent">
        {images.map((image) => (
            <div className="tile is-parent is-4" key={v4()}>
                <div className="tile is-child">
                    <img src={image.image.childImageSharp.fluid.src} alt="Recipe Shot"></img>
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