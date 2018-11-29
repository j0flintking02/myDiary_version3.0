import React, { Component, Fragment } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './navigation';
import { getEntry } from '../actions/entriesActions';


class Description extends Component {
  componentDidMount() {
    this.props.getEntry(this.props.match.params.id);
  }

  render() {
    const data = this.props.entries.entry;

    const entry = data === undefined ? null : (
      <div>
        <p className="date">
          <strong>Date:</strong>
          <i>{data['entry date']}</i>
        </p>
        <br />
        <br />
        <div className=" description_title">
          <b>Title:</b>
          <span>{data.title}</span>
        </div>
        <p>
          {data.description}
        </p>
        <Link to={`/updateEntry/${data['entry id']}`} className="btn btn-success center" id="update">
              update description
        </Link>
      </div>

    );
    return (
      <Fragment>
        <div className="description_page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <Navigation />
              </div>
              <div className="col-sm-4">
                <div className="description">
                  {entry}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries,
});
export { Description as DescriptionTest };
export default connect(mapStateToProps, { getEntry })(Description);
