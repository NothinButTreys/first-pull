import * as React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About First Pull" />
    <Typography
      variant="h3"
      align="center"
      display="block"
      style={{ marginTop: "15px" }}
    >
      About
    </Typography>
    <Typography
      variant="h6"
      style={{
        paddingLeft: "15px",
        backgroundColor: "#444444",
      }}
      align="center"
    >
      Guild Leaders
    </Typography>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "16px",
        paddingLeft: "15px",
      }}
    >
      <Grid xs={12} sm={6} align="center">
        <Typography variant="p" className="priest" display="block">
          Yergory
        </Typography>
      </Grid>
      <Grid xs={12} sm={6} align="center">
        <Typography variant="p" className="hunter" display="block">
          Fallenslayer
        </Typography>
      </Grid>
    </Grid>
    <Typography
      variant="h6"
      style={{
        paddingLeft: "15px",
        backgroundColor: "#444444",
      }}
      align="center"
    >
      Officers
    </Typography>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "16px",
        paddingLeft: "15px",
      }}
    >
      <Grid xs={12} sm={6} align="center">
        <Typography variant="p" className="dh" display="block">
          Pheb
        </Typography>
      </Grid>
      <Grid xs={12} sm={6} align="center">
        <Typography variant="p" className="mage" display="block">
          Replay
        </Typography>
      </Grid>
    </Grid>
    <Typography
      variant="h6"
      style={{
        paddingLeft: "15px",
        backgroundColor: "#444444",
        marginBottom: "16px",
      }}
      align="center"
    >
      Main Raiders:
    </Typography>
    <Typography variant="p" align="center" display="block">
      <b>Tanks</b>
    </Typography>
    <hr style={{ backgroundColor: "rgb(144 144 144)" }} />
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "16px",
        paddingLeft: "15px",
      }}
    >
      <Grid xs={12} sm={6} align="center">
        <Typography variant="p" className="dh" display="block">
          Pheb
        </Typography>
      </Grid>
      <Grid xs={12} sm={6} align="center">
        <Typography variant="p" className="dh" display="block">
          Kaifel
        </Typography>
      </Grid>
    </Grid>
    <Typography variant="p" align="center" display="block">
      <b>DPS</b>
    </Typography>
    <hr style={{ backgroundColor: "rgb(144 144 144)" }} />
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "16px",
        paddingLeft: "15px",
      }}
    >
      <Grid xs={12} sm={4} align="center">
        <Typography variant="p" className="hunter" display="block">
          Fallenslayer
        </Typography>
        <Typography variant="p" className="shaman" display="block">
          Nevafox
        </Typography>
        <Typography variant="p" className="mage" display="block">
          Replay
        </Typography>
      </Grid>
      <Grid xs={12} sm={4} align="center">
        <Typography variant="p" className="shaman" display="block">
          Slothraxx
        </Typography>
        <Typography variant="p" className="warlock" display="block">
          Puttris
        </Typography>
        <Typography variant="p" className="warrior" display="block">
          Kiedra
        </Typography>
        <Typography variant="p" className="hunter" display="block">
          Ninjayoder
        </Typography>
      </Grid>
      <Grid xs={12} sm={4} align="center">
        <Typography variant="p" className="rogue" display="block">
          Fawkes
        </Typography>
        <Typography variant="p" className="monk" display="block">
          Gamerboypee
        </Typography>
        <Typography variant="p" className="dk" display="block">
          Elstra
        </Typography>
      </Grid>
    </Grid>
    <Typography variant="p" align="center" display="block">
      <b>Healers</b>
    </Typography>
    <hr style={{ backgroundColor: "rgb(144 144 144)" }} />
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "16px",
        paddingLeft: "15px",
      }}
    >
      <Grid xs={12} sm={4} align="center">
        <Typography variant="p" className="priest" display="block">
          Yergory
        </Typography>
      </Grid>
      <Grid xs={12} sm={4} align="center">
        <Typography variant="p" className="druid" display="block">
          Tankfist
        </Typography>
      </Grid>
      <Grid xs={12} sm={4} align="center">
        <Typography variant="p" className="shaman" display="block">
          Mespropp
        </Typography>
      </Grid>
    </Grid>
  </Layout>
)

export default SecondPage
