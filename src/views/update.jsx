
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Navigation from './navigation';
import { update } from '../actions/entriesActions';

class UpdateEntry extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const data = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.update(id, data);
    console.log(this.props);
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
                <legend className="signup">Update</legend>
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
export { UpdateEntry as UpdateEntryTest };
export default connect(mapStateToProps, { update })(UpdateEntry);
