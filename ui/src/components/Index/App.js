import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import Header from "../Header";

function App({ user, login }) {
  return (
    <div>
      <Header />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispath) => ({
  login: () => dispath(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
