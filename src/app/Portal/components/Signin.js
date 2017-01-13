import React from 'react';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
} from 'react-bootstrap';



class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formHorizontalEmail: '',
      formHorizontalPassword: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.logIn({
      email: this.state.formHorizontalEmail,
      password: this.state.formHorizontalPassword,
    });
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  logIn(credentials) {
    console.log(credentials);
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Email"
              value={this.state.formHorizontalEmail}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.formHorizontalPassword}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Signin;
