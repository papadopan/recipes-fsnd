import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: red;
  height: 50px;
  min-width: 150px;
  margin-right: 1em;
  border-radius: 40px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-position: top;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  letter-spacing: 1px;

  ${({ link }) =>
    link &&
    css`
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${link});
    `}
`;

const Filter = ({ item }) => {
  return <Wrapper link={item.link}>{item.name}</Wrapper>;
};

Filter.propTypes = {
  item: PropTypes.object,
};

export default Filter;
