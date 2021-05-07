import React from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function MenuTooltip(props) {
  const { isOpen } = props

  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton key={index} item={item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
