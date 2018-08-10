import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import validator from "validator";
import ErrorMessage from "./ErrorMessage";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  }
  
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
    }
  }
   
  onChange = e => this.setState({ 
    data: {...this.state.data, [e.target.name]: [e.target.value] }
  })

  validate = data => {
    const errors = {};
    if(!validator.isEmail(data.email.toString())) errors.email = "Invalid email.";
    if(!data.password) errors.password = "Password cannot be empty.";
    return errors;
  }
  
  render() {
    const { data, errors } = this.state;
    
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <ErrorMessage errorText={errors.email}/>}
        </Form.Field>
        <Form.Field error={!!errors.password}>
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <ErrorMessage errorText={errors.password}/>}
        </Form.Field>
        <Button primary>Submit</Button>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;