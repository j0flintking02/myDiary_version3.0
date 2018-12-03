
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Navigation from './navigation';
import { AddEntries } from '../actions/entriesActions';

class AddEntry extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state.description);
    const data = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.AddEntries(data);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="entry_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <Navigation />
            </div>
            <div className="col-sm-4">
              <form className="sginup_form" onSubmit={this.submitHandler}>
                <legend className="signup">New Entry</legend>
                <div className="form-group">
                  <label htmlFor="entryTitle">Title</label>
                  <br />
                  <input type="text" name="title" id="title" className="tab" onChange={this.changeHandler} required />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <br />
                  <textarea name="description" id="description" onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                  <button id="submit" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries,
});
export { AddEntry as AddEntryTest };
export default connect(mapStateToProps, { AddEntries })(AddEntry);
