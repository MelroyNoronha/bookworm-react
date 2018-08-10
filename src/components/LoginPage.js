import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component{
  submit = data => {
    console.log(data);
  };

  render(){
    return( 
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit}>
          <p>hello</p>
        </LoginForm>
      </div>
    );
  }
}

export default LoginPage