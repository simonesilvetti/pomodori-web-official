import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import ReactMarkdown from 'react-markdown'


const PreparationSteps = ({ preparationSteps }) => (
  <div>
    {preparationSteps.map((preparationStep, index) => (
      <article key={v4()} className="message">
        <a href={"#step" + index} style={{ textDecoration: "none", pointerEvents: "none", cursor: "default" }}>
          <div className="message-body" >
            <div className="numberSquared" style={{
              position: "relative",
              top: "-15px", left: "-20px"
            }}>{index + 1}</div>
            <ReactMarkdown>{preparationStep.step}</ReactMarkdown>
          </div>
        </a>
      </article>
    ))}
  </div >
)

PreparationSteps.propTypes = {
  preparationSteps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string,
    })
  ),
}

export default PreparationSteps