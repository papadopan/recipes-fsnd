import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RecipeBox from "../RecipeBox";

const MainDiv = styled.div`
  padding-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RecipeList = (props) => {
  return (
    <MainDiv>
      <RecipeBox />
    </MainDiv>
  );
};

RecipeList.propTypes = {};

export default RecipeList;
