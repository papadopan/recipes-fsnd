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

const { Content, Header } = Layout;

const AntContent = styled(Content)``;

function Root({ user, login }) {
  return (
    <Layout>
      <AntContent>
        <Switch>
          <ProtectedRoute exact path="/" component={App} />
          <Route path="/login" component={Welcome} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </AntContent>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispath) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
