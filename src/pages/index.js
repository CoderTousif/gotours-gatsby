import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
// import NavBar from "../components/NavBar"
import TopLayout from "../components/TopLayout"
import SEO from "../components/seo"

export default function Index() {
  return (
    <TopLayout>
      <SEO title="Home" />
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby template
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Container>
    </TopLayout>
  )
}
