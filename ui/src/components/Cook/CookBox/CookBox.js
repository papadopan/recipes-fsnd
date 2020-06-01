import React from "react";
import PropTypes from "prop-types";
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";

import { deleteCookById } from "../../../actions/cook";

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  width: 260px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
  padding: 5px;
  margin: 1em;
`;

const PersonalDetails = styled.div`
  padding-left: 1em;
`;

const Title = styled.p`
  font-size: 1.3em;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-left: 5px;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 4px solid var(--color-white);
`;

const CookBox = ({ cook, deleteCook }) => {
  return (
    <InnerDiv>
      <Img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <PersonalDetails>
        <Title>
          {cook.first_name} {cook.last_name}
        </Title>
        <Item>
          <AiOutlineEnvironment size="1.3em" />
          <Label>
            {cook.city}, {cook.country}
          </Label>
        </Item>
        <Item>
          <AiOutlineMail size="1.3em" />
          <Label>{cook.email}</Label>
        </Item>
        <Item>
          <GiKnifeFork size="1.3em" />
          <Label>{cook.recipe_list.length} recipes</Label>
        </Item>
      </PersonalDetails>

      <div onClick={() => deleteCook(cook.id)}>
        <AiOutlineDelete size="1.5em" />
      </div>
    </InnerDiv>
  );
};

CookBox.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteCook: (id) => dispatch(deleteCookById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CookBox);
