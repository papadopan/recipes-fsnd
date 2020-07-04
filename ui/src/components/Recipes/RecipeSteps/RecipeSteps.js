import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0.7em;
`;

const Header = styled.h2`
  font-size: 4em;
  color: var(--color-main);
  font-weight: 300;
  margin: 1em 0;
`;

const Ul = styled.ul`
  padding: 0 1em;
  list-style: none;
`;

const Li = styled.li`
  margin: 1.5em 0;
  line-height: 2.5em;
  font-size: 1.3em;
  font-weight: 100;
`;

const RecipeSteps = ({ data }) => {
  return (
    <MainDiv>
      <Header>Steps</Header>
      <Ul>
        {data.map((item) => (
          <Li>{item.name}</Li>
        ))}
      </Ul>
    </MainDiv>
  );
};

RecipeSteps.propTypes = {};

export default RecipeSteps;
