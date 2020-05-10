import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled(Link)`
  font-size: 1.8em;
  font-weight: 100;
  color: var(--color-white);

  :hover {
    color: var(--color-yellow);
  }
`;

const Logo = (props) => {
  return <Header to="/">MyCook</Header>;
};

Logo.propTypes = {};

export default Logo;
