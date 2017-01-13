import React from 'react';
import fetch from 'isomorphic-fetch';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
} from 'react-bootstrap';


const createAccount = (email, password) => {
  return fetch('/api/users/v2', {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signupEmail: '',
      signupPassword1: '',
      signupPassword2: '',
      isSending: false,
      succeeded: false,
      failed: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isSending: true});
    createAccount(this.state.signupEmail, this.state.signupPassword2)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(resp => {
        this.setState({
          isSending: false,
          succeeded: true,
          failed: false,
          signupEmail: '',
          signupPassword1: '',
          signupPassword2: '',
        });
      })
      .catch(e => {
        this.setState({
          isSending: true,
          succeeded: false,
          failed: true,
        });
      });
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  getValidationState() {
    if (this.state.signupPassword2 && this.state.signupPassword1 === this.state.signupPassword2) {
      return 'success';
    }
    return 'error';
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="signupEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Choose your email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Email"
              value={this.state.signupEmail}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="signupPassword1">
          <Col componentClass={ControlLabel} sm={2}>
            Create a password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.signupPassword1}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>


        <FormGroup
          controlId="signupPassword2"
          validationState={this.getValidationState()}
        >
          <Col componentClass={ControlLabel} sm={2}>
            Confirm your password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.signupPassword2}
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              bsStyle="primary"
              type="submit"
              disabled={this.state.isSending}
            >
              {this.state.isSending ? 'Sending...' : 'Sign Up'}
            </Button>
          </Col>
        </FormGroup>


        {!this.state.isSending && this.state.succeeded && (
          <p>Account was successfully created!</p>
        )}

        {!this.state.isSending && this.state.failed && (
          <p>Sorry, there was an error while creating your account!</p>
        )}

      </Form>
    );
  }
}

export default Signup;
