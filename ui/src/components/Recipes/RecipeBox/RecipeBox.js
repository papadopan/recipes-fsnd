import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const MainDiv = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
`;

const RecipeBox = (props) => {
  return <MainDiv>box</MainDiv>;
};

RecipeBox.propTypes = {};

export default RecipeBox;
