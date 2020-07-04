import React from "react";
import PropTypes from "prop-types";
import { AiOutlineClockCircle, AiOutlineTag } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 0.8em;
  font-weight: 300;
`;

const RecipeStats = ({ icon, label }) => {
  return (
    <Wrapper>
      {icon2Comp[icon]}
      <P>{label}</P>
    </Wrapper>
  );
};

let icon2Comp = {
  time: <AiOutlineClockCircle size="1.5em" color="rgba(0,0,0,0.6)" />,
  category: <AiOutlineTag size="1.5em" color="rgba(0,0,0,0.6)" />,
  portion: <GiKnifeFork size="1.5em" color="rgba(0,0,0,0.6)" />,
};

RecipeStats.propTypes = {};

export default RecipeStats;
