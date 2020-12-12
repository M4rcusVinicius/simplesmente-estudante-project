import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  background-color: var(--mediumBackground);
  transition: background, color 0.5s;
`

export const LayoutMain = styled.main`
  min-height: 100vh;
  max-width: 72rem;
  padding: 2rem;
  margin-top: 4rem;
  margin: auto;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }

  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`
