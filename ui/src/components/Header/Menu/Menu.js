import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled(Link)`
  margin: 0 1.5em;
  font-size: 1.2em;
  color: var(--color-white);

  :hover {
    color: var(--color-yellow);
  }
`;

const Menu = (props) => {
  return (
    <List>
      <ListItem to="/recipe">Recipes</ListItem>
      <ListItem to="/cook">Cooks</ListItem>
      <ListItem to="/create">Create</ListItem>
      <ListItem to="/">Login</ListItem>
    </List>
  );
};

Menu.propTypes = {};

export default Menu;
