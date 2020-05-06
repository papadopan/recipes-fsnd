import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Headers = styled.p`
  font-size: 3em;
  font-weight: 300;
  margin-right: 0.5em;
  color: var(--color-secondary);

  ${({ separator }) =>
    separator &&
    css`
      color: var(--color-secondary);
    `}

  ${({ active }) =>
    active &&
    css`
      color: var(--color-grey);
    `}
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecipeHeader = (props) => {
  return (
    <MainDiv>
      <Headers>My Recipes</Headers>
    </MainDiv>
  );
};
RecipeHeader.propTypes = {};

export default RecipeHeader;
