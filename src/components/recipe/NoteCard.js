import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'


const NoteCard = ({ note }) => (
    <div className="section">
        <div className="box">
            <div className="subtitle is-size-2	" style={{
                position: "relative",
                top: "-15px", left: "-10px"
            }}>Note</div>
            <ReactMarkdown>{note}</ReactMarkdown>
        </div>
    </div >
)

NoteCard.propTypes = {
    note: PropTypes.string
}

export default NoteCard