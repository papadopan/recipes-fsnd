import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

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
  height: 220px;
  border-radius: 5px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const RecipeBox = (props) => {
  return (
    <MainDiv>
      <Image src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <div>
        <H1>Pasta with Pesto</H1>
      </div>
    </MainDiv>
  );
};

RecipeBox.propTypes = {};

export default RecipeBox;
