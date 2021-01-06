import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
// import NavBar from "../components/NavBar"
import TopLayout from "../components/TopLayout"

export default function Index() {
  return (
    <TopLayout>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Container>
    </TopLayout>
  )
}
