import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

function Blog({ data, location, pageContext }) {
  return (
    <Layout>
      <Seo
        pagetitle={`CATEGORY:${pageContext.catname}`}
        pagedesc={`「${pageContext.catname}」カテゴリーの記事です`}
        pagepath={location.pathname}
      />
      <section className="content bloglist">
        <div className="container">
          <h1 className="bar">CATEGORY: {pageContext.catname}</h1>
          <div className="posts">
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <article className="post" key={node.id}>
                <Link to={`/blog/post/${node.slug}`}>
                  <figure>
                    <Img
                      fluid={node.eyecatch.fluid}
                      alt={node.eyecatch.description}
                      style={{ height: "100%" }}
                    />
                  </figure>
                  <h3>{node.title}</h3>
                </Link>
              </article>
            ))}
          </div>
          <ul className="pagenation">
            {!pageContext.isFirst && (
              <li className="prev">
                <Link
                  to={
                    pageContext.currentPage === 2
                      ? `/cat/${pageContext.catslug}`
                      : `/cat/${pageContext.catslug}/${
                          pageContext.currentPage - 1
                        }/`
                  }
                  rel="prev"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>前のページ</span>
                </Link>
              </li>
            )}

            {!pageContext.isLast && (
              <li className="next">
                <Link
                  to={`/cat/${pageContext.catslug}/${
                    pageContext.currentPage + 1
                  }/`}
                  rel="next"
                >
                  <span> 次のページ</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($catid: String!, $skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      skip: $skip
      limit: $limit
      filter: { category: { elemMatch: { id: { eq: $catid } } } }
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`
