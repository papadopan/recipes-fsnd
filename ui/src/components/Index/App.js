import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import Header from "../Header";
import Recipes from "../Recipes";
import { Layout } from "antd";

function App({ user, login }) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Recipes />
      </Layout.Content>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispath) => ({
  login: () => dispath(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
