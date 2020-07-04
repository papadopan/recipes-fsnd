import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import styled from "styled-components";

const columns = [
  {
    title: "Ingredient",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Measurement",
    dataIndex: "measurement",
    key: "measurement",
  },
];

const MainDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding 0 0.7em;
`;

const Header = styled.h2`
  font-size: 4em;
  color: var(--color-main);
  font-weight: 300;
  margin: 1em 0;
`;

const IngredientList = ({ data }) => {
  return (
    <MainDiv>
      <Header>Ingredients</Header>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </MainDiv>
  );
};

IngredientList.propTypes = {};

export default IngredientList;
