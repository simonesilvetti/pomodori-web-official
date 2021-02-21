import React from 'react'
import glovesImage from '../img/glove_instagram.png'

class ShareGlovesBadge extends React.Component {
    render() {
        return (
            <img
                src={glovesImage}
                alt="Instagram Page"
                style={{ width: '300px', height: '300px' }}
            />
        );
    }
}

export default ShareGlovesBadge;