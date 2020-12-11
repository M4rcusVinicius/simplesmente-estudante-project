import React from "react"
import Profile from "../Profile"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <S.SidebarSearchLink to="/search/" title="Pesquisar">
      Pesquisar...
    </S.SidebarSearchLink>
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
