import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import RecipeForm from "./RecipeForm";
import CookForm from "./CookForm";

const MainDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  background: red;
`;

const Header = styled.span`
  font-size: 2em;
  margin 1em 0;
  color: var(--color-main);
  
`;

const Choice = styled.div`
  font-size: 3em;
  text-align: left;
  color: var(--color-main);
  border: 1px solid var(--color-main);
  padding: 1em;
`;

const NewContentForm = (props) => {
  return (
    <MainDiv>
      <Choice>Add a new Recipe</Choice>
      <Choice>Create a new CookBook</Choice>
      {/* <Header>My new Recipe</Header>
      <RecipeForm /> */}
    </MainDiv>
  );
};

NewContentForm.propTypes = {};

export default NewContentForm;
