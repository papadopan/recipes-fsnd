import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

function App({ user, login }) {
  return <div onClick={login}>{user}</div>;
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispath) => ({
  login: () => dispath(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
