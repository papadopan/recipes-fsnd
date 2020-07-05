import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
  height: 200px;
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Img = styled.img`
  max-height: 200px;
  width: 200px;
  border-radius: 5px;
  box-shadow: 2px 8px 16px rgba(24, 50, 115, 0.2);
  margin: 0.5em 0;
`;

const DetailsWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Span = styled.span`
  font-size: 1.1em;
  margin 0.5em 0;
  font-weight:300;
`;

const PersonalDetails = (props) => {
  if (props.user !== null) {
    return (
      <Wrapper>
        <Img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <DetailsWrapper>
          <Span>
            {props.user.last_name} {props.user.first_name}
          </Span>
          <Span>{props.user.email}</Span>
          <Span>
            {props.user.country},{props.user.city}
          </Span>
        </DetailsWrapper>
      </Wrapper>
    );
  }

  return null;
};

PersonalDetails.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
