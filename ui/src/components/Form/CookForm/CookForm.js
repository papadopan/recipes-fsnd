import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import { Input, Select, Button } from "antd";
import * as Yup from "yup";
import styled from "styled-components";
import { addNewCook } from "../../../actions/cook";
import { connect } from "react-redux";
import { Spin, Space } from "antd";

const Error = styled.div`
  color: var(--color-error);
`;

const TextComponent = ({ field, form: { touched, errors }, ...props }) => (
  <div style={{ margin: "10px" }}>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </div>
);

const CookForm = ({ addCook }) => {
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        country: "",
        city: "",
      }}
      onSubmit={(values, actions) => {
        addCook(values);
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .max(20, "First Name can not be that long")
          .required("First name is mandatory"),
        last_name: Yup.string()
          .max(20, "Last Name can not be that long")
          .required("Last name is mandatory"),
        email: Yup.string().email().required("Email is mandatory"),
        country: Yup.string()
          .max(20, "Country can not be that long")
          .required("Country is mandatory"),
        city: Yup.string()
          .max(20, "City can not be that long")
          .required("City is mandatory"),
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
            name="country"
            placeholder="Country"
            component={TextComponent}
          />
          <Field name="city" placeholder="City" component={TextComponent} />
          <Button onClick={handleSubmit} disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

CookForm.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addCook: (cook) => dispatch(addNewCook(cook)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CookForm);
