import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="main">
        <div class="wrapper">
            <button class="button">
                Check your registration
            </button>
            <button class="button">
                Register to vote
            </button>
            <button class="button">
                Check your registration
            </button>
        </div>
    </div>
  </Layout>
)

export default IndexPage
