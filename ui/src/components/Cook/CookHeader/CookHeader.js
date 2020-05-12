import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineEnvironment } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";

const MainDiv = styled.div`
  width: 100%;
  background: no-repeat
    url("https://images.unsplash.com/photo-1556910633-5099dc3971e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-position: center;
  height: 30em;
  margin-bottom: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 110px;
  border: 4px solid var(--color-white);
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
  padding: 5px;
`;

const PersonalDetails = styled.div`
  padding-left: 1em;
`;

const Title = styled.p`
  font-size: 1.3em;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  margin-left: 5px;
`;

const CookHeader = (props) => {
  return (
    <MainDiv>
      <InnerDiv>
        <Img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <PersonalDetails>
          <Title>Antonios Papadopoulos</Title>
          <Item>
            <AiOutlineEnvironment size="1.3em" />
            <Label>Kastoria, Greece</Label>
          </Item>
          <Item>
            <GiKnifeFork size="1.3em" />
            <Label>32 recipes</Label>
          </Item>
        </PersonalDetails>
      </InnerDiv>
    </MainDiv>
  );
};

CookHeader.propTypes = {};

export default CookHeader;
