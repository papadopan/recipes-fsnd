import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import RecipeHeader from "../Header";
import Recipes from "../Recipes";
import RecipeDetails from "../Recipes/RecipeDetails";
import Cook from "../Cook";
import Form from "../Form";
import Welcome from "../Welcome";
import Footer from "../Footer";
import { Layout } from "antd";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const { Content, Header } = Layout;

const AntHeader = styled(Header)`
  background: var(--color-main);
  min-height: 6vh;
`;

const AntFooter = styled(Layout.Footer)`
  background: var(--color-main);
  text-align: center;
  color: var(--color-white);
  min-height: 4vh;
`;

const AntContent = styled(Content)`
  min-height: 90vh;
`;

function App({ user, login }) {
  return (
    <Layout>
      <AntHeader>
        <RecipeHeader />
      </AntHeader>
      <AntContent>
        <Switch>
          <Route exact path="/" component={Welcome} />
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
