import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPagePreview = ({ entry, collection, widgetFor, getAsset, fieldsMetaData, config, fields }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <RecipePostTemplate
      title={entry.getIn(['data', 'title'])}
      difficulty={entry.getIn(['data', 'difficulty'])}
      time={entry.getIn(['data', 'time'])}
      featuredImage={getAsset(entry.getIn(['data', 'featuredImage']))}
      //images={entry.getIn(['data', 'images'])}
      dose={entry.getIn(['data', 'dose'])}
      ingredients={entry.getIn(['data', 'ingredients'])}
      preparationSteps={entry.getIn(['data', 'preparationSteps'])}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      blogger={entry.getIn(['data', 'blogger'])}
    />
  )
}

RecipePostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default RecipePostPagePreview