import React from "react";
import { connect } from "react-redux";

function App({ user }) {
  return <div>{user}</div>;
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispath) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
