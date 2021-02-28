import React from 'react'
import Layout from '../../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { Link } from 'gatsby'

const SearchPage = ({ state, index, store }) => {
  const query = state ? state.content : ""
  const results = useFlexSearch(query, index, store)
  if (results.length > 0) {
    const totalCount = results.length
    const finalLetter = totalCount === 1 ? 'a' : 'e';
    const tagHeader = `${totalCount} ricett${finalLetter} trovat${finalLetter}`
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
            <ul className="taglist">
              {results.map(result => (
                <li key={result.id}>
                  <Link to={result.slug}>
                    <div className="subtitle is-size-2">-{result.title}-</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="container content">
          <div className="subtitle is-size-2"> Nessuna ricetta trovata :(</div>
        </div>
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