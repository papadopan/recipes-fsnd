import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RecipeStats from "./RecipeStats";

const SLink = styled(Link)`
  color: black;
  display: flex;
  justify-content: flex-end;
`;

const MainDiv = styled.div`
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 5px;

  margin: 1em;
`;

const H1 = styled.h1`
  color: var(--color-white);
  font-weight: 600;
`;

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

const ImagedDiv = styled.div`
  background-image: url("https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
  height: 220px;
  width: 100%;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  padding: 1em;
`;

const RecipeBox = ({ recipe }) => {
  return (
    <MainDiv>
      <SLink to={`/recipe/${recipe.id}`}>
        <ImagedDiv>
          <H1>{recipe.title}</H1>
        </ImagedDiv>
      </SLink>
      <Details>
        <Stats>
          <RecipeStats icon="time" label={`${recipe.time} mins`} />
          <RecipeStats icon="category" label={recipe.category} />
          <RecipeStats icon="portion" label={`${recipe.portions} portion(s)`} />
        </Stats>
      </Details>
    </MainDiv>
  );
};

RecipeBox.propTypes = {};

export default RecipeBox;
