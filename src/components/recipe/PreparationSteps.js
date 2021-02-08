import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import ReactMarkdown from 'react-markdown'


const PreparationSteps = ({ preparationSteps }) => (
  <div>
    {preparationSteps.map((preparationStep) => (
      <article key={v4()} className="message">
        <div className="message-body">
        <ReactMarkdown>{preparationStep.step}</ReactMarkdown>
        </div>
      </article>
    ))}
  </div>
)

PreparationSteps.propTypes = {
  preparationSteps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string,
    })
  ),
}

export default PreparationSteps