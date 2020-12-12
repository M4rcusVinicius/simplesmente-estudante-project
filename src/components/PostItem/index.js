import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const PostItem = ({
  featuredImgFluid,
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {

  return (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
      <Img fluid={featuredImgFluid} />
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)}

PostItem.propTypes = {
  featuredImgFluid: PropTypes.string,
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
