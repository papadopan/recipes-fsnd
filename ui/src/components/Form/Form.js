import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import RecipeForm from "./RecipeForm"
import CookForm from "./CookForm"


const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filtering = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Choices = styled.span`
  margin: 0 1em;
  font-size: 5em;
  color: var(--color-black);

  ${({ selected }) =>
    selected &&
    css`
      color: var(--color-main);
    `}
`;





const NewContentForm = (props) => {
  return (
    <MainDiv>
      <Filtering>
        <Choices selected>Recipe</Choices>
        <Choices>Cook</Choices>
      </Filtering>
      <RecipeForm/>
      <CookForm/>
    </MainDiv>
  );
};

NewContentForm.propTypes = {};

export default NewContentForm;
