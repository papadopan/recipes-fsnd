import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "antd";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import { TextComponent, PasswordComponent } from "../common/FormComponents";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import { Row, Col, Spin } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  margin: 10px;
`;

const SubmitButton = styled(Button)`
  height: 50px;
  width: 100%;
  max-width: 380px;
  margin: 50px 0 0 0;
  background: var(--color-button);
  border-radius: 4px;
  color: var(--color-white);
`;

const Div = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpForm = ({ signup, loading, error }) => {
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
        first_name: "",
        last_name: "",
        country: "",
        city: "",
        email: "",
        _password: "",
      }}
      onSubmit={(values, actions) => {
        signup(values);
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .required("Your name is required")
          .min(2, "Too short name")
          .max(20, "Too long name"),
        last_name: Yup.string()
          .required("Last name is required")
          .min(3, "Too short last name")
          .max(30, "Too long last name"),
        country: Yup.string()
          .required("Country is required")
          .min(2, "Country too short")
          .max(30, "Country name too long"),
        city: Yup.string()
          .required("City is required")
          .min(3, "City name too short")
          .max(30, "City name too long"),
        email: Yup.string()
          .email("make sure your email format is correct")
          .required("Email is mandatory"),
        _password: Yup.string()
          .required("Password is a required property")
          .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
            "one uppercase, one lowercase, one number"
          ),
      })}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form>
          <Field
            name="first_name"
            placeholder="First Name"
            component={TextComponent}
          />
          <Field
            name="last_name"
            placeholder="Last Name"
            component={TextComponent}
          />
          <Field name="email" placeholder="E-mail" component={TextComponent} />
          <Field
            name="_password"
            placeholder="Password"
            component={PasswordComponent}
          />
          <Field
            name="country"
            placeholder="Country"
            component={TextComponent}
          />
          <Field name="city" placeholder="City" component={TextComponent} />
          <MainDiv>{error && error.message}</MainDiv>
          <Div>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isSubmitting}
              type="submit"
            >
              Create Account
            </SubmitButton>
            <Link to="/login">Already a member? LogIn</Link>
          </Div>
        </Form>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(signupUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
