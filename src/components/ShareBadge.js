import React from 'react'
import { FaFacebook, FaWhatsapp, FaTelegram,FaInstagram } from "react-icons/fa"
import {
    FacebookShareButton,
    TelegramShareButton,
    WhatsappShareButton,
} from "react-share";

class ShareBadge extends React.Component {
    render() {
        const url = this.props.url
        const content = this.props.content
        const size = 25
        return (
            <div className="badgeShare">
                <i><FacebookShareButton url={url} quote={content} hashtag="#PomodoriAlSole"><FaInstagram size={size} /></FacebookShareButton></i>
                <FacebookShareButton url={url} quote={content} hashtag="#PomodoriAlSole"><FaFacebook size={size} /></FacebookShareButton>
                <WhatsappShareButton url={url}><FaWhatsapp size={size} /></WhatsappShareButton>
                <TelegramShareButton url={url}><FaTelegram size={size} /></TelegramShareButton>
            </div>
        );
    }
}

export default ShareBadge;