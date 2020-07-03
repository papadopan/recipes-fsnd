import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import RecipeForm from "./RecipeForm";
import CookForm from "./CookForm";

const MainDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 2em;
  margin 1em 0;
  color: var(--color-main);
  
`;

const NewContentForm = (props) => {
  return (
    <MainDiv>
      <Header>My new Recipe</Header>
      <RecipeForm />
    </MainDiv>
  );
};

NewContentForm.propTypes = {};

export default NewContentForm;
