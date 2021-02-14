import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPagePreview = ({ entry, collection, widgetFor, getAsset, fieldsMetaData, config, fields }) => {
  console.log(entry)
  console.log(collection)
  console.log(widgetFor)
  console.log(getAsset)
  console.log(fieldsMetaData)
  console.log(config)
  console.log(fields)

  return (

    <RecipePostTemplate
      title={entry.getIn(['data', 'title'])}
      difficulty={entry.getIn(['data', 'difficulty'])}
      time={entry.getIn(['data', 'time'])}
      featuredImage={entry.getIn(['data', 'featuredImage'])}
      images={entry.getIn(['data', 'images'])}
      dose={entry.getIn(['data', 'dose'])}
      ingredients={entry.getIn(['data', 'ingredients'])}
      preparationSteps={entry.getIn(['data', 'preparationSteps'])}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
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