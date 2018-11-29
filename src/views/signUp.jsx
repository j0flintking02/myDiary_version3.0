import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from '../actions/signupAction';

export class SignUP extends Component {
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
    const { user } = this.props;
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.createUser(data);

    if (user.message === 'username is already taken') {
      toast.error('username is already taken', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (user.message === 'new user created') {
      toast.success(user.message, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        this.props.history.push('/login');
      }, 3000);
    }
  }

  render() {
    return (
      <div className="row" id="background">
        <div className="col-md-3 align-self-center offset-md-5">
          <h1 className="text-center">sign up</h1>
          <form onSubmit={this.submitHandler} id="signup">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">user name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.onchangeHandle}
              />
              <small id="emailHelp" className="form-text text-muted">
We'll never share your email with
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
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { createUser })(SignUP);
