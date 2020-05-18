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

const Menu = (props) => {
  return (
    <List>
      <ListItem to="/recipe">Recipes</ListItem>
      {props.token && (
        <>
          <ListItem to="/create">Create</ListItem>
          <ListItem to="/cook">Cooks</ListItem>
        </>
      )}

      {props.token ? (
        <a href="https://dev-t0uvp9wb.eu.auth0.com/v2/logout?client_id=TRwKMTOnA42a0hdGKI6rd3nuQ6D8VZmr">
          logout
        </a>
      ) : (
        <a href="https://dev-t0uvp9wb.eu.auth0.com/authorize?audience=recipe&response_type=token&client_id=TRwKMTOnA42a0hdGKI6rd3nuQ6D8VZmr&redirect_uri=http://localhost:3000/recipe">
          Login
        </a>
      )}
    </List>
  );
};

Menu.propTypes = {};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
