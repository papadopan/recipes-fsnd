import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import styled from "styled-components";

const data = [
  {
    key: "1",
    ingredient: "John Brown",
    amount: 32,
    measurement: "gr",
  },
  {
    key: "2",
    ingredient: "Jim Green",
    amount: 42,
    measurement: "table spoon",
  },
  {
    key: "3",
    ingredient: "Joe Black",
    amount: 32,
    measurement: "table spoon",
  },
];

const columns = [
  {
    title: "Ingredient",
    dataIndex: "ingredient",
    key: "ingredient",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
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
`;
const IngredientList = (props) => {
  return (
    <MainDiv>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </MainDiv>
  );
};

IngredientList.propTypes = {};

export default IngredientList;
