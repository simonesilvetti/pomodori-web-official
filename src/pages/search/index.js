import React from 'react'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import VegetarianToolTip from '../../components/recipe/VegetarianToolTip'
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
            <div className="columns is-multiline">
              {results.map(result => (
              <div className="is-parent column is-4" key={result.id}>
                <article
                  className='blog-list-item tile is-child is-vertical box'
                >
                  <div className="tile is-child">
                    {result.featuredimage ? (
                      <div>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: result.featuredimage,
                            alt: `featured image thumbnail for post ${result.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="tile is-child">
                    <div className="post-meta">
                      <Link
                        className="subtitle has-text-black is-size-3"
                        to={result.slug}
                      >
                        {result.title}{result.tags.includes("vegetariano") ? <VegetarianToolTip /> : null}
                      </Link>
                    </div>
                  </div>
                  {/* <p>
                <Link className="button" to={post.fields.slug}>
                  Continua a leggere →
                </Link>
              </p> */}
                </article>
              </div>
            ))}
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