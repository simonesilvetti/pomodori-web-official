import React from 'react'

import Layout from '../../components/Layout'
import RecipeRoll from '../../components/RecipeRoll'

export default class RecipeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <div
            className="title has-text-weight-bold is-size-1"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '1rem',
            }}>
            Latest Recipes
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <RecipeRoll />
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}
