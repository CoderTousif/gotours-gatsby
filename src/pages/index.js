import React from "react"
import Container from "@material-ui/core/Container"
// import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"
// import ProTip from "../components/ProTip"
// import Link from "../components/Link"
// import NavBar from "../components/NavBar"
import TopLayout from "../components/TopLayout"
import SEO from "../components/seo"
import CardList from "../components/CardList"

export default function Index() {
  return (
    <TopLayout>
      <SEO title="Home" />
      <Container style={{ marginTop: "2rem" }}>
        <CardList />
        {/* <ProTip /> */}
      </Container>
    </TopLayout>
  )
}
