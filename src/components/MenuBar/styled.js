import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  display: flex;
  justify-content: space-between;
  right: 0;
  transition: background 0.5s;

  border-top: 1px solid var(--borders);
  bottom: 0;
  height: auto;
  padding: 0;
  position: fixed;
  width: 100%;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;

  height: 3.2rem;
  padding: .9rem;
  position: relative;
  width: 3.2rem;
  
  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
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
