import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import Slick from "../components/Slick"
import Languages from "../components/Languages"
import Hobbies from "../components/Hobbies"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner />
    <Slick />
    <Languages />
    <Hobbies />
  </Layout>
)

export default IndexPage
