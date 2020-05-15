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
`;
const IngredientList = ({ data }) => {
  return (
    <MainDiv>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </MainDiv>
  );
};

IngredientList.propTypes = {};

export default IngredientList;
