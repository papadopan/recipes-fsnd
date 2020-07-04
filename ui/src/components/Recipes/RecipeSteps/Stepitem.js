import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledItem = styled.span`
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
  }

  ${({ checked }) =>
    checked &&
    css`
      text-decoration-line: line-through;
      color: var(--color-main);
    `}
`;

const Stepitem = ({ data }) => {
  const [checked, setChecked] = useState(false);
  return (
    <StyledItem checked={checked} onClick={() => setChecked(!checked)}>
      {data}
    </StyledItem>
  );
};

Stepitem.propTypes = {};

export default Stepitem;
