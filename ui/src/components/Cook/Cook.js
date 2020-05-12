import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { getAllCooks } from "../../actions/cook";

import CookHeader from "./CookHeader";
import RecipeList from "../Recipes/RecipeList";
import RecipeHeader from "../Recipes/RecipeList/RecipeHeader";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
`;

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0 0 2em;
`;

const Cook = ({ getAllCooks }) => {
  useEffect(() => {
    getAllCooks();
    console.log("ppppppAA");
  }, []);

  return (
    <MainDiv>
      <CookHeader />
      <RecipeHeader />
      <RecipeList />
    </MainDiv>
  );
};

Cook.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispath) => ({
  getAllCooks: () => dispath(getAllCooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cook);
