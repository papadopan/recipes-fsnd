import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

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

const A = styled.a`
  color: var(--color-white);

  :hover {
    color: var(--color-yellow);
  }
`;

const Menu = (props) => {
  return (
    <List>
      <ListItem to="/">Recipes</ListItem>
      <ListItem to="/create">Create</ListItem>
      <ListItem to="/cook">Cooks</ListItem>
    </List>
  );
};

Menu.propTypes = {};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
