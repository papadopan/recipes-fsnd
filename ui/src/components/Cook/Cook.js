import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
`;

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0 0 2em;
`;

const Cook = (props) => {
  return (
    <MainDiv>
      <Img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <DetailsDiv>
        <h1>Sofia Stergiou</h1>
        <h2>Kastoria, Greece</h2>
      </DetailsDiv>
    </MainDiv>
  );
};

Cook.propTypes = {};

export default Cook;
