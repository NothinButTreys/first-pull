import * as React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About First Pull" />
    <Typography variant="h3" align="center" display="block">
      About First Pull
    </Typography>
    <Typography variant="h5">Meet the Leaders</Typography>
    <Typography variant="h6">Guild Leaders</Typography>
    <Typography variant="p" display="block" paragraph>
      Yergory, Fallenslayer
    </Typography>
    <Typography variant="h6">Officers</Typography>
    <Typography variant="p" display="block" paragraph>
      Replay, Pheb
    </Typography>
    <Typography variant="h6">Main Raiders:</Typography>
    <Typography variant="p" display="block">
      <b>Tanks:</b>Pheb, Kaifel
    </Typography>
    <Typography variant="p" display="block">
      <b>DPS:</b>Fallenslayêr, Nevafox, Replay, Slothraxx, Puttris, Kiedra,
      Ninjayoder, Fawkes, Gamerboypee, Elstra
    </Typography>
    <Typography variant="p" display="block" paragraph>
      <b>Healers:</b>Yergory, Tankfist, Mespropp
    </Typography>
  </Layout>
)

export default SecondPage
