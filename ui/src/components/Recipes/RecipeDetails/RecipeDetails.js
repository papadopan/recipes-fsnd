import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Tag } from "antd";
import IngredientList from "../IngredientList";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import EditModal from "../../Form/EditModal";

import {
  getRecipeById,
  updateRecipeById,
  deleteRecipeById,
} from "../../../actions/recipe";
import { connect } from "react-redux";

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
  text-align: center;
`;

const TagList = styled.div`
  margin: 1em 0;
`;

const ActionsDiv = styled.div`
  svg {
    margin: 0 2em;
    cursor: pointer;

    :first-child {
      :hover {
        color: var(--color-main);
      }
    }
    :last-child {
      :hover {
        color: var(--color-error);
      }
    }
  }
`;

const RecipeDetails = (props) => {
  useEffect(() => {
    props.getRecipeById(props.match.params.id);
  }, []);

  const [modal, setModal] = useState(false);

  const _updateRecipe = (values) => {
    props.updateRecipeById(values, props.match.params.id);
    setModal(!modal);
  };

  if (!props.recipe) {
    return <div>waiting</div>;
  }

  return (
    <MainDiv>
      <ImgDiv>
        <Img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </ImgDiv>
      <DetailsDiv>
        <StyledP>{props.recipe.title}</StyledP>
        <TagList>
          <Tag color="default">{props.recipe.category}</Tag>
          <Tag color="default">{props.recipe.time} mins</Tag>
          <Tag color="default">{props.recipe.portions} portion(s)</Tag>
        </TagList>
        <ActionsDiv>
          <AiOutlineEdit size="2em" onClick={() => setModal(!modal)} />
          <AiOutlineDelete
            size="2em"
            onClick={() => props.deleteRecipeById(props.match.params.id)}
          />
        </ActionsDiv>
        <EditModal
          visible={modal}
          updateModal={() => setModal(!modal)}
          recipe={props.recipe}
          updateRecipe={(values) => _updateRecipe(values)}
          id={props.match.params.id}
        />
        <StyledDescription>{props.recipe.description}</StyledDescription>
      </DetailsDiv>
      <IngredientList data={props.recipe.ingredients} />
    </MainDiv>
  );
};

RecipeDetails.propTypes = {};

const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipeById: (id) => dispatch(getRecipeById(id)),
  updateRecipeById: (recipe, id) => dispatch(updateRecipeById(recipe, id)),
  deleteRecipeById: (id) => dispatch(deleteRecipeById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
