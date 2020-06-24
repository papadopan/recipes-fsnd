import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const l = [{ name: "mexican" }, { name: "italian" }];

const FilterList = (props) => {
  return (
    <Wrapper>
      {l.map((item) => (
        <Filter />
      ))}
    </Wrapper>
  );
};

FilterList.propTypes = {};

export default FilterList;
