import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filtering = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Choices = styled.span`
  margin: 0 1em;
  font-size: 5em;
  color: var(--color-black);

  ${({ selected }) =>
    selected &&
    css`
      color: var(--color-main);
    `}
`;

const NewContentForm = (props) => {
  return (
    <MainDiv>
      <Filtering>
        <Choices selected>Recipe</Choices>
        <Choices>Cook</Choices>
      </Filtering>
      <Formik>
        <Form>
          <Field name="lastName" placeholder="Last Name" />
          <ErrorMessage name="first_name" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </MainDiv>
  );
};

NewContentForm.propTypes = {};

export default NewContentForm;
