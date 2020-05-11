import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineEnvironment } from "react-icons/ai";

const MainDiv = styled.div`
  width: 100%;
  background: no-repeat
    url("https://images.unsplash.com/photo-1556910633-5099dc3971e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-position: center;
  height: 20em;
  position: relative;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 4px solid var(--color-white);
`;

const InnerDiv = styled.div`
  position: absolute;
  bottom: -70px;
  left: 50px;
  display: flex;
  align-items: flex-end;
`;

const PersonalDetails = styled.div`
  padding-left: 1em;
`;

const Title = styled.p`
  font-size: 1.3em;
`;

const CookHeader = (props) => {
  return (
    <MainDiv>
      <InnerDiv>
        <Img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <PersonalDetails>
          <Title>Antonios Papadopoulos</Title>
          <div>
            <AiOutlineEnvironment size="1.3em" />
            Kastoria, Greece
          </div>
        </PersonalDetails>
      </InnerDiv>
    </MainDiv>
  );
};

CookHeader.propTypes = {};

export default CookHeader;
