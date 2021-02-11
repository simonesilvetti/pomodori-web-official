import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {graphql, StaticQuery } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class DemoCarousel extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="is-fluid " >
        <Carousel showThumbs={false} >
          {posts &&
            posts.map(({ node: post }) => (
              <div key="{post}">
                <div>
                  <img src={post.frontmatter.featuredimage.childImageSharp.original.src} />
                  <p className="legend">{post.frontmatter.title}</p>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    );
  }
}

DemoCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


// export default DemoCarousel

export default () => (
  <StaticQuery
    query={graphql`
        query DemoCarouselQuery {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "recipe-post"}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    featuredimage {
                      childImageSharp {
                        original {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
      `}
    render={(data, count) => <DemoCarousel data={data} count={count} />}
  />
)
