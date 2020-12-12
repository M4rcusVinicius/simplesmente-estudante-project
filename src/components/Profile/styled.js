import styled from "styled-components"
import media from "styled-media-query"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  text-align: left;

  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.2rem;
  margin: 0 0 0 10px;  

`

export const ProfilePosition = styled.small`
  display: block;
  font-weight: 300;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`