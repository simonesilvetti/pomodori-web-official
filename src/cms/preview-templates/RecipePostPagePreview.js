import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <RecipePostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      preparationSteps={entry.getIn(['data', 'preparationSteps'])}
    />
  )
}

RecipePostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecipePostPagePreview