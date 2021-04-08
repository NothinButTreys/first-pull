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
      <span className="priest">Yergory</span>,{" "}
      <span className="hunter">Fallenslayer</span>
    </Typography>
    <Typography variant="h6">Officers</Typography>
    <Typography variant="p" display="block" paragraph>
      <span className="mage">Replay</span>, <span className="dh">Pheb</span>
    </Typography>
    <Typography variant="h6">Main Raiders:</Typography>
    <Typography variant="p" display="block">
      <b>Tanks:</b> <span className="dh">Pheb</span>,{" "}
      <span className="dh">Kaifel</span>
    </Typography>
    <Typography variant="p" display="block">
      <b>DPS:</b> <span className="hunter">Fallenslayer</span>,{" "}
      <span className="shaman">Nevafox</span>,{" "}
      <span className="mage">Replay</span>,{" "}
      <span className="shaman">Slothraxx</span>,{" "}
      <span className="warlock">Puttris</span>,{" "}
      <span className="warrior">Kiedra</span>,
      <span className="hunter">Ninjayoder</span>,{" "}
      <span className="rogue">Fawkes</span>,{" "}
      <span className="monk">Gamerboypee</span>,{" "}
      <span className="dk">Elstra</span>
    </Typography>
    <Typography variant="p" display="block" paragraph>
      <b>Healers:</b> <span className="priest">Yergory</span>,{" "}
      <span className="druid">Tankfist</span>,{" "}
      <span className="shaman">Mespropp</span>
    </Typography>
  </Layout>
)

export default SecondPage
