import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

const ErrorMessage = ({ errorText }) => (
  <div>
    <Message negative>{errorText}</Message>
  </div>
);

ErrorMessage.propTypes = {
  errorText: PropTypes.string.isRequired
};

export default ErrorMessage;
