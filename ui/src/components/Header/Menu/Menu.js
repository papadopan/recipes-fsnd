import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin: 0 1.5em;
  font-size: 1.2em;
`;

const Menu = (props) => {
  return (
    <List>
      <ListItem>Recipes</ListItem>
      <ListItem>Cooks</ListItem>
      <ListItem>Login</ListItem>
    </List>
  );
};

Menu.propTypes = {};

export default Menu;
