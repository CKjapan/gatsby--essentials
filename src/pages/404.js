import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ location }) => {
  return (
    <Layout>
      <Seo
        pagetitle="ページが見つかりません"
        pagepath={location.pathname}
      />
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>お探しのページは見つかりませんでした</h1>
    </Layout>
  )
}
