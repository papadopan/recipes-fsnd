import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import { TextComponent, PasswordComponent } from "../common/FormComponents";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { Row, Col, Spin } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../common/Buttons";

const MainDiv = styled.div`
  margin: 10px;
`;

const Div = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 5px;
`;

const Login = ({ login, loading, error }) => {
  if (loading) {
    return (
      <Row align="center" justify="center">
        <Col>
          <Spin />
        </Col>
      </Row>
    );
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        login(values);
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("make sure your email format is correct")
          .required("Email is mandatory"),
        password: Yup.string()
          .required("Password is a required property")
          .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
            "one uppercase, one lowercase, one number"
          ),
      })}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form>
          <Field name="email" placeholder="E-mail" component={TextComponent} />
          <Field
            name="password"
            placeholder="Password"
            component={PasswordComponent}
          />
          <MainDiv>{error && error.message}</MainDiv>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            type="submit"
            text="Login"
          />
          <Div>
            <Link to="/signup">I do not have an account yet</Link>
          </Div>
        </Form>
      )}
    </Formik>
  );
};

Login.propTypes = {};

const mapStateToProps = (state) => ({
  loading: state.auth.loging_loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
