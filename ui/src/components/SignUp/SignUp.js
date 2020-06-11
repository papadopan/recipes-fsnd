import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import { Row, Col, Space } from "antd";
import { connect } from "react-redux";

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
  font-size: 3em;
  color: var(--color-main);
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const Message = styled.p`
  font-family: Open Sans;
  font-size: 2em;
  color: var(--color-main);
  margin: 0;
`;

const SignUp = ({ emailSent }) => {
  return (
    <MainDiv>
      <Row justify="center" align="center">
        <Col xs={24} md={24} lg={7}>
          <Img src={login} />
        </Col>
        <Col xs={24} lg={7}>
          <FormDiv>
            <Row
              justify="middle"
              align="center"
              style={{ height: "100%", padding: "3em" }}
            >
              <Col>
                <Space direction="vertical" size={40}>
                  <div>
                    <Title>
                      Welcome to the largest pro home cooks community!
                    </Title>
                  </div>
                  {emailSent ? (
                    <Message>
                      A confirmation email has sent to your inbox
                    </Message>
                  ) : (
                    <SignUpForm />
                  )}
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

const mapStateToProps = (state) => ({
  emailSent: state.auth.emailSent,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
