import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HomePage = ({ isAuthenticated }) => (
  <div className="ui container">
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <button type="button">Logout</button>
    ) : (
      <Link to="login">Login</Link>
    )}
  </div>
);

const MapStateToProps = state => ({
  isAutheticated: !!state.user.token
});

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(MapStateToProps)(HomePage);
