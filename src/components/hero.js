import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./hero.css"

export default () => (
  <div className="hero">
    <video
      className="header-video async-background"
      loop="loop"
      autoPlay="autoplay"
      playsInline="playsinline"
      src="https://assets.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltf849b1da51ec1f66/5dbb2f0f24642a3b8da56e97/Shadowlands_Cinematic_Loop_MP4.mp4"
    ></video>
    <div className="heroDetails">
      <h3 className="heroHeadline">First Pull</h3>
      <StaticImage
        src="../images/logo.png"
        height="200"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Preparation is key"
      />
      <p className="heroTitle">First pull even if it's the tenth</p>
      <p className="shortBio">#1 Guild on Tich</p>
    </div>
  </div>
)
