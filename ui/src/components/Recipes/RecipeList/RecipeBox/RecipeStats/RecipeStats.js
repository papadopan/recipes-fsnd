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

const RecipeStats = ({ icon, label }) => {
  return (
    <Wrapper>
      {icon2Comp[icon]}
      <p>{label}</p>
    </Wrapper>
  );
};

let icon2Comp = {
  time: <AiOutlineClockCircle size="1.5em" />,
  category: <AiOutlineTag size="1.5em" />,
  portion: <GiKnifeFork size="1.5em" />,
};

RecipeStats.propTypes = {};

export default RecipeStats;
