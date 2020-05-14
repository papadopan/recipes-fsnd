import React, {useState} from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import RecipeForm from "./RecipeForm"
import CookForm from "./CookForm"


const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filtering = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Choices = styled.span`
  margin: 0 1em;
  font-size: 5em;
  color: var(--color-grey);
  cursor:pointer;

  ${({ active }) =>
  active &&
    css`
      color: var(--color-main);
    `}
`;



const NewContentForm = (props) => {
  const [selected, setSelected] = useState('recipe')
  const getForm = name =>{
    let returnForm = {
      recipe: <RecipeForm/>,
      cook: <CookForm/>
    }

    return returnForm[name];
  }
  return (
    <MainDiv>
      <Filtering>
        <Choices active={selected ==="recipe"} onClick={()=>setSelected("recipe")}>Recipe</Choices>
        <Choices active={selected ==="cook"} onClick={()=>setSelected("cook")}>Cook</Choices>
      </Filtering>
      {getForm(selected)}
    </MainDiv>
  );
};

NewContentForm.propTypes = {};

export default NewContentForm;
