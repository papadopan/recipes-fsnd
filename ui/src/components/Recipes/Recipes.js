import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import empty from "../../utils/images/empty.svg";

import { getAllRecipes } from "../../actions/recipe";
import { loginUser } from "../../actions/auth";

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

const Recipes = (props) => {
  useEffect(() => {
    props.getAllRecipes();

    if (!props.token && props.location && props.location.hash) {
      let token = props.location.hash.substr(1).split("&")[0].split("=")[1];
      props.loginUser(token);
    }
  }, []);

  if (props.loading) {
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
      {props.recipes.length > 0 ? (
        <RecipeList recipes={props.recipes} />
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
  loginUser: (token) => dispatch(loginUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
