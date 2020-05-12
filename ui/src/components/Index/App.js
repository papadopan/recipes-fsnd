import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import RecipeHeader from "../Header";
import Recipes from "../Recipes";
import RecipeDetails from "../Recipes/RecipeDetails";
import Cook from "../Cook";
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

const AntLayout = styled(Layout)`
  min-heigth: 100vh;
`;
function App({ user, login }) {
  return (
    <AntLayout>
      <AntHeader>
        <RecipeHeader />
      </AntHeader>
      <Content>
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipe" component={RecipeDetails} />
          <Route exact path="/cook" component={Cook} />
        </Switch>
      </Content>
      <AntFooter>
        <Footer />
      </AntFooter>
    </AntLayout>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispath) => ({
  login: () => dispath(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);