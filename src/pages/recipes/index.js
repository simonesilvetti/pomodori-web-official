import React from 'react'

import Layout from '../../components/Layout'
import RecipeCard from '../../components/RecipeCard'

export default class RecipeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/recipe-background.jpg')`,
          }}
        >
          <div
            className="title has-text-weight-bold is-size-1"
            style={{
              backgroundColor: 'rgba(255, 255, 255)',
              padding: '1rem',
            }}>
            Ricette
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div class="columns">
              <div class="column is-offset-1">
                <div className="content recipe-citation">
                  “Lo sai perché mi piace cucinare?”<br />
                  “No, perché?”<br />
                  “Perché dopo una giornata in cui niente è sicuro, e quando dico niente voglio dire n-i-e-n-t-e, una torna a casa e sa con certezza che aggiungendo al cioccolato rossi d’uovo, zucchero e latte l’impasto si addensa: è un tale conforto!”<br />
                  <div style={{ textAlign: "right", fontStyle: "italic" }}>(Julia Child)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <RecipeCard />
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}
