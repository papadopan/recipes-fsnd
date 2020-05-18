import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) => {
  if (!props.token) {
    return <Redirect to="/" />;
  }
  return <Route path={props.path} component={props.component} />;
};

ProtectedRoute.propTypes = {};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
