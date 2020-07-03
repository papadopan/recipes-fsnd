import React from "react";
import { Input, InputNumber, Select } from "antd";
import styled from "styled-components";

const { TextArea } = Input;
const { Option } = Select;

const Error = styled.div`
  color: var(--color-error);
  position: absolute;
  left: 5px;
`;

const StyledInput = styled(Input)`
  background: var(--color-white);
  border: 0;
  outline: 0;
  padding: 10px;

  &:focus {
    -webkit-box-shadow: 0 0 0 0 var(--color-grey);
    box-shadow: 0 0 0 0 var(--color-grey);
  }
`;

const MainDiv = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "0 0 40px 0")};
  position: relative;
`;

const StyledTextArea = styled(TextArea)`
  background: var(--color-white);
  border: 0;
  outline: 0;
  resize: none;

  &:focus {
    -webkit-box-shadow: 0 0 0 0 var(--color-grey);
    box-shadow: 0 0 0 0 var(--color-grey);
  }
`;

export const TextComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <MainDiv margin={props.margin}>
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

export const TextAreaComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <MainDiv margin={props.margin}>
    <StyledTextArea rows={props.rows || 10} {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </MainDiv>
);

export const NumberComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <MainDiv>
    <label style={{ marginRight: "5px" }}>{props.fieldPlaceholder}:</label>
    <InputNumber
      {...field}
      {...props}
      onChange={(value) => props.onChange(value)}
    />
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
    <label style={{ marginLeft: "5px" }}>{props.followingPlaceholder}</label>
  </MainDiv>
);

export const SelectComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <MainDiv>
    <label>{props.fieldPlaceholder}:</label>
    <Select
      style={{ marginLeft: "5px" }}
      placeholder={props.placeholder}
      onChange={(value) => props.onChange(value)}
    >
      {props.options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </MainDiv>
);
