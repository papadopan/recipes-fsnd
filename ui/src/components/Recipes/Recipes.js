import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RecipeHeader from "./RecipeList/RecipeHeader";
import RecipeList from "./RecipeList";

const MainDiv = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
`;

const Recipes = (props) => {
  return (
    <MainDiv>
      <RecipeHeader />
      <RecipeList />
    </MainDiv>
  );
};

Recipes.propTypes = {};

export default Recipes;
