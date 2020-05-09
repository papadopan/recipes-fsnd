import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Header = styled.p`
  font-size: 1.8em;
  font-weight: 100;
`;

const Logo = (props) => {
  return <Header>MyCook</Header>;
};

Logo.propTypes = {};

export default Logo;
