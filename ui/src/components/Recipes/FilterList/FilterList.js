import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em 0;
  display: flex;
`;

const categories = [
  {
    name: "Vegan",
    link:
      "https://images.unsplash.com/photo-1549736624-81a2ca809ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Vegetarian",
    link:
      "https://images.unsplash.com/photo-1591189863430-ab87e120f312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "italian",
    link:
      "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "burger",
    link:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const FilterList = (props) => {
  return (
    <Wrapper>
      {categories.map((item) => (
        <Filter item={item} />
      ))}
    </Wrapper>
  );
};

FilterList.propTypes = {};

export default FilterList;
