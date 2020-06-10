import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const Error = styled.div`
  color: var(--color-error);
  position: absolute;
  left: 5px;
`;

const StyledInput = styled(Input)`
  background: var(--color-white);
  border: 0;
  outline: 0;
  border-bottom: 1px solid var(--color-grey);
  padding: 10px;
`;

const MainDiv = styled.div`
  margin: 0 0 30px 0;
  poistion: relative;
`;

export const TextComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <MainDiv>
    <StyledInput type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </MainDiv>
);
export const PasswordComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <MainDiv>
    <StyledInput type="password" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </MainDiv>
);
