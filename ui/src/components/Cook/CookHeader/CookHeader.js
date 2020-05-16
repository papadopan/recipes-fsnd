import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  background: no-repeat
    url("https://images.unsplash.com/photo-1556910633-5099dc3971e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-position: center;
  margin-bottom: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20em;
`;

const Title = styled.p`
  font-size: 6em;
  font-weight: 300;
  color: var(--color-yellow);
`;
const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const CookHeader = (props) => {
  return (
    <MainDiv>
      <InnerDiv>
        <Title>Cooks</Title>
      </InnerDiv>
    </MainDiv>
  );
};

CookHeader.propTypes = {};

export default CookHeader;
