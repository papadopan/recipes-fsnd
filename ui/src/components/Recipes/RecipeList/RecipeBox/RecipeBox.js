import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import RecipeStats from "./RecipeStats";

const SLink = styled(Link)`
  color: black;

  display: flex;
  justify-content: flex-end;
`;

const MainDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 520px;
  height: 220px;
  border-radius: 5px;
  display: flex;
  margin: 1em;
`;

const Image = styled.img`
  width: 200px;
  height: 218px;
  border-radius: 5px;
`;

const H1 = styled.h1``;

const Details = styled.div`
  padding: 1em 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecipeBox = ({ recipe }) => {
  return (
    <MainDiv>
      <Image src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <Details>
        <H1>{recipe.title}</H1>
        <p>{recipe.description}</p>
        <Stats>
          <RecipeStats icon="time" label={`${recipe.time} mins`} />
          <RecipeStats icon="category" label={recipe.category} />
          <RecipeStats icon="portion" label={`${recipe.portions} portion(s)`} />
        </Stats>
        <SLink to={`/recipe/${recipe.id}`}>
          <BsArrowRight size="2em" />
        </SLink>
      </Details>
    </MainDiv>
  );
};

RecipeBox.propTypes = {};

export default RecipeBox;
