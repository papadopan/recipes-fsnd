import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PersonalDetails from "./PersonalDetails";

const profile = (props) => {
  console.log("====================================");
  console.log(props.user);
  console.log("====================================");
  return (
    <div>
      <PersonalDetails />
    </div>
  );
};

profile.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
