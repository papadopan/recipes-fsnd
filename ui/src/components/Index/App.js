import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import RecipeHeader from "../Header";
import Recipes from "../Recipes";
import Footer from "../Footer";
import { Layout } from "antd";
import styled from "styled-components";

const { Content, Header } = Layout;

const AntHeader = styled(Header)`
  background: var(--color-main);
`;

const AntFooter = styled(Layout.Footer)`
  background: var(--color-main);
  text-align: center;
  color: var(--color-white);
`;

function App({ user, login }) {
  return (
    <Layout>
      <AntHeader>
        <RecipeHeader />
      </AntHeader>
      <Content>
        <Recipes />
      </Content>
      <AntFooter>
        <Footer />
      </AntFooter>
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
