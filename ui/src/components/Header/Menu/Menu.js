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

const Menu = ({ loggedin, type }) => {
  return (
    <List>
      {loggedin && (
        <React.Fragment>
          <ListItem to="/recipe">Recipes</ListItem>
        </React.Fragment>
      )}
      {(type === "user" || type === "admin") && (
        <React.Fragment>
          <ListItem to="/create">Create</ListItem>
          <ListItem to="/cook">Cooks</ListItem>
        </React.Fragment>
      )}

      <a href="https://dev-t0uvp9wb.eu.auth0.com/v2/logout?client_id=TRwKMTOnA42a0hdGKI6rd3nuQ6D8VZmr">
        logout
      </a>
    </List>
  );
};

Menu.propTypes = {};

const mapStateToProps = (state) => ({
  loggedin: state.auth.loggedin,
  type: state.auth.type,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
