import React from "react";
import PropTypes from "prop-types";

const Welcome = (props) => {
  return (
    <div>
      <a href="https://dev-t0uvp9wb.eu.auth0.com/authorize?audience=recipe&response_type=token&client_id=TRwKMTOnA42a0hdGKI6rd3nuQ6D8VZmr&redirect_uri=http://localhost:3000/recipe">
        Login
      </a>
    </div>
  );
};

Welcome.propTypes = {};

export default Welcome;
