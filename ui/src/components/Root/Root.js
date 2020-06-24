import React from "react";
import { connect } from "react-redux";
import Recipes from "../Recipes";

import App from "../Index";
import Welcome from "../Welcome";
import Signup from "../SignUp";

import { Layout } from "antd";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "../routes/ProtectedRoute";
import SimpleRoute from "../routes/SimpleRoute";

const { Content, Header } = Layout;

const AntContent = styled(Content)``;

function Root({ user, login }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <AntContent>
        <Switch>
          <SimpleRoute exact path="/signup" component={Signup} />
          <SimpleRoute exact path="/login" component={Welcome} />
          <ProtectedRoute path="/" component={App} />
        </Switch>
      </AntContent>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispath) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
