import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background: red;
  height: 80px;
  min-width: 300px;
  margin-right: 1em;
  border-radius: 40px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://images.unsplash.com/photo-1549736624-81a2ca809ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-position: top;
  background-size: cover;
`;

const Filter = (props) => {
  return <Wrapper>antoios</Wrapper>;
};

Filter.propTypes = {};

export default Filter;
