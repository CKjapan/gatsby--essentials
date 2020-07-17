// CONTENTFUL_SPACE_ID=xu13r9lp341i CONTENTFUL_ACCESS_TOKEN=WSju1Nwcty70_IgjHyIdsTdFKqSdD4-Blk13-A1-NGU CONTENTFUL_HOST=cdn.contentful.com gatsby develop -H 0.0.0.0
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
