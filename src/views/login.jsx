import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/signup.css';
import { loginUser } from '../actions/loginActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onchangeHandle = this.onchangeHandle.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onchangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginUser(data);
    this.props.history.push('/home');
  }

  render() {
    const regStyle = {
      textAlign: 'center',
    };
    return (
      <div className="row" id="background">
        <div className="col-md-3 align-self-center offset-md-5">
          <h1 className="text-center">Login</h1>
          <form onSubmit={this.submitHandler} id="signup">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">user name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                onChange={this.onchangeHandle}
              />
              <small id="emailHelp" className="form-text text-muted">
                                We'll never share your details with
                                anyone else.

              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.onchangeHandle}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <small id="emailHelp" className="center form-text text-muted">
                  click
              <Link to="/signup"> register </Link>
                  if you dont have an account
            </small>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state,
});
export { Login as LoginTest };
export default connect(mapStateToProps, { loginUser })(Login);
