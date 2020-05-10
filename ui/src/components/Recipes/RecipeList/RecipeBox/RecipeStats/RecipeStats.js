import React from "react";
import PropTypes from "prop-types";
import { AiOutlineClockCircle, AiOutlineTag } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";

const RecipeStats = ({ icon, label }) => {
  return (
    <div>
      {icon2Comp[icon]}
      <p>{label}</p>
    </div>
  );
};

let icon2Comp = {
  time: <AiOutlineClockCircle size="1.5em" />,
  category: <AiOutlineTag size="1.5em" />,
  portion: <GiKnifeFork size="1.5em" />,
};

RecipeStats.propTypes = {};

export default RecipeStats;
