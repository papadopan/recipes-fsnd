import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import empty from "../../utils/images/empty.svg";

import { getAllRecipes } from "../../actions/recipe";
import { Spin, Space } from "antd";

import RecipeHeader from "./RecipeList/RecipeHeader";
import RecipeList from "./RecipeList";

const MainDiv = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: 2em;
  margin: 1em;
`;

const Recipes = ({ getAllRecipes, recipes, loading }) => {
  useEffect(() => {
    getAllRecipes();
  }, []);

  if (loading) {
    return (
      <MainDiv>
        <Space>
          <Spin size="large" />
        </Space>
      </MainDiv>
    );
  }

  return (
    <MainDiv>
      <RecipeHeader />
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <StyledDiv>
          <Img src={empty} />
          <P>There are no recipes yet...</P>
        </StyledDiv>
      )}
    </MainDiv>
  );
};

Recipes.propTypes = {};

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
  loading: state.recipe.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllRecipes: () => dispatch(getAllRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
