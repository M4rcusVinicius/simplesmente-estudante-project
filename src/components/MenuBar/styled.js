import styled from "styled-components"
import media from "styled-media-query"
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
`

export const MenuBarGroup = styled.div`
  display: flex;
`

export const MenuBarLink = styled(Link)`

`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;

  height: 3.2rem;
  padding: .9rem;
  position: relative;
  width: 3.2rem;
  transition: 200ms;
  
  &.dark {
    &:hover {
      color: #ffe209;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

`
