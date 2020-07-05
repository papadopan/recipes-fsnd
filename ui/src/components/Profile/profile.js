import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileSettings from "./ProfileSettings";

import PersonalDetails from "./PersonalDetails";

const profile = (props) => {
  return (
    <div>
      <ProfileSettings />
      <PersonalDetails />
    </div>
  );
};

profile.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
