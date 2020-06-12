import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  height: 50px;
  width: 100%;
  max-width: 380px;
  margin: 50px 0 0 0;
  background: var(--color-white);
  border-radius: 4px;
  border-color: var(--color-main);
  color: var(--color-main);

  :hover {
    background: var(--color-secondary);
    border: 0;
    color: var(--color-white);
  }
`;

const Buttons = ({ text, type, onClick, disabled }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabed={disabled}>
      {text}
    </StyledButton>
  );
};

Buttons.propTypes = {};

export default Buttons;
