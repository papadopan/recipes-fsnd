import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Login from "../LoginForm";
import { Row, Col, Space } from "antd";

const MainDiv = styled.div`
  background: var(--color-secondary);
  padding: 3em;
`;

const Title = styled.div`
  color: var(--color-white);
  font-size: 3em;
  font-weight: 200;
  font-family: Helvetica Neue;
  letter-spacing: 1px;
  margin-bottom: 2em;
`;

const Welcome = (props) => {
  return (
    <MainDiv>
      <Row align="center" justify="center">
        <Space direction="vertical">
          <Col span={24}>
            <Title>Create your account .</Title>
          </Col>
        </Space>
      </Row>
      <Row align="center" justify="center">
        <Col span={6}>
          <Login />
        </Col>
      </Row>
    </MainDiv>
  );
};

Welcome.propTypes = {};

export default Welcome;
