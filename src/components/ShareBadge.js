import React from 'react'
import { FaFacebook, FaWhatsapp, FaTelegram, FaTwitter } from "react-icons/fa"
import {
    FacebookShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from "react-share";

class ShareBadge extends React.Component {
    render() {
        const url = this.props.url
        const content = this.props.content
        const size = 25
        return (
            <div className="badgeShare">
                <FacebookShareButton url={url} quote={content} hashtag="#PomodoriAlSole"><FaFacebook size={size} /></FacebookShareButton>
                <TwitterShareButton title={content} url={url} hashtag="#PomodoriAlSole"><FaTwitter size={size} /></TwitterShareButton>
                <WhatsappShareButton url={url} ><FaWhatsapp size={size} /></WhatsappShareButton>
                <TelegramShareButton url={url} ><FaTelegram size={size} /></TelegramShareButton>
            </div>
        );
    }
}

export default ShareBadge;