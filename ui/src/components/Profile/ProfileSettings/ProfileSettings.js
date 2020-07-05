import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";

const Div = styled.div``;

const ProfileSettings = (props) => {
  return (
    <Div>
      <AiOutlineLogout
        size={20}
        color="var(--color-main)"
        onClick={props.logout}
      />
    </Div>
  );
};

ProfileSettings.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
