import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import RecipeForm from "./RecipeForm";
import CookForm from "./CookForm";

import { GiSpoon } from "react-icons/gi";
import { IoMdBook } from "react-icons/io";

const MainDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 95vh;
`;

const Header = styled.span`
  font-size: 2em;
  margin 0 0 1em 0; 
  color: var(--color-main);
  
`;

const Choice = styled.div`
  font-size: 3em;
  text-align: left;
  color: var(--color-main);
  border: 1px solid var(--color-main);
  padding: 1em;
  margin: 1em 0;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--color-main);
    color: var(--color-white);
    cursor: pointer;
    transition: 0.4s;
  }
`;

const NewContentForm = (props) => {
  const [choice, setChoice] = useState("");

  if (choice === "") {
    return (
      <MainDiv>
        <Choice onClick={() => setChoice("recipe")}>
          <GiSpoon style={{ marginRight: "20px" }} />
          Add a new Recipe
        </Choice>
        <Choice onClick={() => setChoice("cookbook")}>
          <IoMdBook style={{ marginRight: "20px" }} />
          Create a new CookBook
        </Choice>
      </MainDiv>
    );
  }

  if (choice === "recipe") {
    return (
      <MainDiv>
        <Header>My new Recipe</Header>
        <RecipeForm />
      </MainDiv>
    );
  }

  if (choice === "cookbook") {
    return (
      <MainDiv>
        <Header>My new CookBook</Header>
        <CookForm />
      </MainDiv>
    );
  }
};

NewContentForm.propTypes = {};

export default NewContentForm;
