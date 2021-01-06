import React from "react"
import Card from "./Card"
import tours from "../../data/toursData"
import Grid from "@material-ui/core/Grid"

function CardList() {
  //   const { tours } = props
  // const classes = useStyles();
  //   const tours = JSON.parse(toursData)
  //   console.log(toursData)
  const cardList = tours.map((tour, i) => {
    return (
      <Grid item key={i} tour>
        <Card tour={tour} />
      </Grid>
    )
  })

  return (
    <Grid container justify="space-around" spacing={3}>
      {cardList}
    </Grid>
  )
}

export default CardList
