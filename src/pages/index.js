import * as React from "react"
import Grid from "@material-ui/core/Grid"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/callout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm="4" className="callout">
        <StaticImage
          src="../images/callout1.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Preparation is key"
        />
        <Typography variant="p" align="center" display="block">
          Preparation is key
        </Typography>
      </Grid>
      <Grid item xs={12} sm="4" className="callout">
        <StaticImage
          src="../images/callout2.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Gaming with friends"
        />
        <Typography variant="p" align="center" display="block">
          Gaming with friends
        </Typography>
      </Grid>
      <Grid item xs={12} sm="4" className="callout">
        <StaticImage
          src="../images/callout3.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ahead of the curve"
        />
        <Typography variant="p" align="center" display="block">
          Ahead of the curve
        </Typography>
      </Grid>
    </Grid>
    <Grid container direction="row" justify="center" alignItems="center">
      <div className="banner">
        <Typography variant="p" align="left" display="inline-block">
          Come join the Death rolls and take{" "}
          <span style={{ color: "#A330C9" }}>phebs</span> gold
        </Typography>
        <Button
          style={{
            fontFamily: "snes",
            marginLeft: "30px",
            backgroundColor: "#FFD700",
          }}
        >
          take it
        </Button>
      </div>
    </Grid>
  </Layout>
)

export default IndexPage
