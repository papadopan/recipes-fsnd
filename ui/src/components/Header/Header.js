import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "./Logo";
import Menu from "./Menu";

const HeaderDiv = styled.div`
  height: 4em;
  background: var(--color-main);
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <Logo />
      <Menu />
    </HeaderDiv>
  );
};

Header.propTypes = {};

export default Header;
