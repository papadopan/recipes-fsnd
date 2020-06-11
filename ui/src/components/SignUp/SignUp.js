import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import { Row, Col, Space } from "antd";

import login from "../../utils/images/login.jpg";
const MainDiv = styled.div`
  background: var(--color-secondary);
  padding: 1em 3em;
  height: 100%;
`;

const FormDiv = styled.div`
  background: var(--color-white);
  height: 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Title = styled.h1`
  font-family: Open Sans;
  font-size: 4em;
  color: var(--color-main);
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const SignUp = (props) => {
  return (
    <MainDiv>
      <Row justify="center" align="center">
        <Col span={9}>
          <Img src={login} />
        </Col>
        <Col span={9}>
          <FormDiv>
            <Row
              justify="middle"
              align="center"
              style={{ height: "100%", padding: "3em" }}
            >
              <Col>
                <Space direction="vertical" size={60}>
                  <div>
                    <Title>
                      Welcome to the largest pro home cooks community!
                    </Title>
                  </div>
                  <SignUpForm />
                </Space>
              </Col>
            </Row>
          </FormDiv>
        </Col>
      </Row>
    </MainDiv>
  );
};

SignUp.propTypes = {};

export default SignUp;
