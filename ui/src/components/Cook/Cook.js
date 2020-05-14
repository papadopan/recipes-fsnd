import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { getAllCooks } from "../../actions/cook";
import { Spin, Space } from "antd";
import empty from "../../utils/images/empty.svg";

import CookHeader from "./CookHeader";
import CookBox from "./CookBox";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: 2em;
  margin: 1em;
`;
const Cook = ({ getAllCooks, cooks, loading }) => {
  // fetch on mount the cooks
  useEffect(() => {
    getAllCooks();
  }, []);

  if (loading) {
    return (
      <MainDiv>
        <Space>
          <Spin size="large" />
        </Space>
      </MainDiv>
    );
  }

  return (
    <MainDiv>
      <CookHeader />
      <InnerDiv>
        {cooks.length > 0 ? (
          cooks.map((cook, index) => <CookBox key={index} cook={cook} />)
        ) : (
          <StyledDiv>
            <Img src={empty} />
            <P>There is no cook aroud here...</P>
          </StyledDiv>
        )}
      </InnerDiv>
    </MainDiv>
  );
};

Cook.propTypes = {};

const mapStateToProps = (state) => ({
  cooks: state.cook.cooks,
  loading: state.cook.loading,
});

const mapDispatchToProps = (dispath) => ({
  getAllCooks: () => dispath(getAllCooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cook);
