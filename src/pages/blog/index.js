import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
        // style={{
        //   backgroundImage: `url('/img/blog-index.jpg')`,
        // }}
        >
          <div
            className="title has-text-weight-bold is-size-1 has-text-centered"
            style={{
              backgroundColor: 'rgba(255, 255, 255)',
              padding: '1rem',
            }}>
            Blog
        </div>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-offset-1">
                  <div className="content recipe-citation">
                    “La lettura è il cibo della mente, e tutto quello che ha a che fare con il cibo deve per forza essere buono.”<br />
                    <div style={{ textAlign: "right", fontStyle: "italic" }}>(Snoopy)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Ultimi Post
          </h1> */}
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
