import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const categories = [
  {
    name: "vegan",
    link:
      "https://images.unsplash.com/photo-1549736624-81a2ca809ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "vegetarian",
    link:
      "https://images.unsplash.com/photo-1591189863430-ab87e120f312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "salads",
    link:
      "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "pasta",
    link:
      "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "beef",
    link:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "porc",
    link:
      "https://images.unsplash.com/photo-1502333052765-1424f32cf5ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "chicken",
    link:
      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "sweets",
    link:
      "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
