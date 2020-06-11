import React from "react";
import { connect } from "react-redux";
import RecipeHeader from "../Header";
import Recipes from "../Recipes";
import RecipeDetails from "../Recipes/RecipeDetails";
import Cook from "../Cook";
import Form from "../Form";
import Welcome from "../Welcome";
import Signup from "../SignUp";
import Footer from "../Footer";
import { Layout } from "antd";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const { Content, Header } = Layout;

const AntHeader = styled(Header)`
  background: var(--color-main);
`;

const AntFooter = styled(Layout.Footer)`
  background: var(--color-main);
  text-align: center;
  color: var(--color-white);
`;

const AntContent = styled(Content)``;

function App({ user, login }) {
  return (
    <Layout>
      <AntHeader>
        <RecipeHeader />
      </AntHeader>
      <AntContent>
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route exact path="/login" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/recipe" component={Recipes} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/create" component={Form} />
          <Route path="/cook" component={Cook} />
        </Switch>
      </AntContent>
      <AntFooter>
        <Footer />
      </AntFooter>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispath) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
