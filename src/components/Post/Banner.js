import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

var filePath = desert.jpg

const Banner = ( filePath ) => {
  const { bannerImage } = useStaticQuery(
    graphql`
      query Banner($filePath: String!) {
        bannerImage: file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.BannerWrapper fluid={bannerImage.childImageSharp.fluid} />
}

export default Banner