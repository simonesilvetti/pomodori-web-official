import React from 'react'
import Layout from '../../components/Layout'
import RecipeCardList from '../../components/RecipeCardList'
import { graphql, StaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'


const SearchPage = ({ state, index, store }) => {
  const query = state ? state.content : ""
  const results = useFlexSearch(query, index, store)
  if (results.length > 0) {
    const totalCount = results.length
    const finalLetter = totalCount === 1 ? 'o' : 'i';
    const tagHeader = `${totalCount} contenut${finalLetter} trovat${finalLetter}`
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                  {results.map(card => <RecipeCardList key={card.id} card={card} />)}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="subtitle is-size-2"> Non ho trovato nulla :(</div>
          </div>
        </section>
      </Layout>)
  }
}

export default (info) => (
  <StaticQuery
    query={graphql`
      {
          localSearchPages {
            index
            store
          }
        }
    `}
    render={(data) => <SearchPage state={info.location.state} index={data.localSearchPages.index} store={data.localSearchPages.store} ></SearchPage>}
  />
)