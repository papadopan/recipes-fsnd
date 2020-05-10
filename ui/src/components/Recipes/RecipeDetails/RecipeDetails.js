import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import IngredientList from "../IngredientList";

const MainDiv = styled.div`
  padding: 3em 0;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 100%;
  max-height: 400px;
  border-radius: 5px;
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
  margin: 1em 0;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledP = styled.p`
  font-size: 3em;
  font-weight: 300;

  ::first-letter {
    color: var(--color-main);
    font-weight: 500;
    font-size: 1.8em;
    padding: 1em 0em;
    text-transform: uppercase;
  }
`;

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDescription = styled.p`
  font-size: 1.2em;
  font-weight: 300;
  width: 100%;
  max-width: 500px;
  line-height: 2em;
`;

const RecipeDetails = (props) => {
  return (
    <MainDiv>
      <ImgDiv>
        <Img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </ImgDiv>
      <DetailsDiv>
        <StyledP>Pasta with pesto</StyledP>
        <StyledDescription>
          bdkj cjkdn cdjnc cenck cnkcnwd kwnkcldw lcnldwn pcwmlkdmcm clkwdn
          clwdkncwd ckncwlkdnc clknwlkcd ncwnkldcn ncklwc kcnwlnd bdkj cjkdn
          cdjnc cenck cnkcnwd kwnkcldw lcnldwn pcwmlkdmcm clkwdn clwdkncwd
          ckncwlkdnc clknwlkcd ncwnkldcn ncklwc kcnwlnd bdkj cjkdn cdjnc cenck
          cnkcnwd kwnkcldw lcnldwn pcwmlkdmcm clkwdn clwdkncwd ckncwlkdnc
          clknwlkcd ncwnkldcn ncklwc kcnwlnd bdkj cjkdn cdjnc cenck cnkcnwd
          kwnkcldw lcnldwn pcwmlkdmcm clkwdn clwdkncwd ckncwlkdnc clknwlkcd
          ncwnkldcn ncklwc kcnwlnd
        </StyledDescription>
      </DetailsDiv>
      <IngredientList />
    </MainDiv>
  );
};

RecipeDetails.propTypes = {};

export default RecipeDetails;
