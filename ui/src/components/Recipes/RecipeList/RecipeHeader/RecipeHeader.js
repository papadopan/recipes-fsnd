import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Intro from "../../../../utils/images/intro.jpg";

const Headers = styled.p`
  font-size: 3em;
  font-weight: 300;
  color: var(--color-secondary);

  ::selection {
    background: var(--color-yellow);
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  background-image: url(${Intro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
`;

const RecipeHeader = (props) => {
  return (
    <MainDiv>
      <Headers>The next recipe is always, the better</Headers>
    </MainDiv>
  );
};
RecipeHeader.propTypes = {};

export default RecipeHeader;
