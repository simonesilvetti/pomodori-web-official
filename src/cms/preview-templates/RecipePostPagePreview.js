import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <RecipePostTemplate
      helmet={data.helmet}
      title={data.title}
      difficulty={data.difficulty}
      time={data.time}
      featuredImage={data.featuredImage}
      images={data.images}
      dose={data.dose}
      ingredients={data.ingredients}
      preparationSteps={data.preparationSteps}
      description={data.description}
      tags={data.tags}
      blogger={data.blogger}
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