import React from "react"
import Profile from "../Profile"
import MenuLinks from "../MenuLinks"
import MenuBar from "../MenuBar"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <MenuLinks />
    <MenuBar />
  </S.SidebarWrapper>
)

export default Sidebar
