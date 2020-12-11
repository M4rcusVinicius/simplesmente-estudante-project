import React from "react"
import Profile from "../Profile"
import MenuLinks from "../MenuLinks"
import Search from "../Search"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <Search />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
