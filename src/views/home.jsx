import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import '../App.css';
import { getEntries } from '../actions/entriesActions';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { entries: props };
    props.getEntries();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ entries: nextProps.entries });
  }

  render() {
    const { entries: data } = this.state;
    const entries = (Array.isArray(data)) ? (
      data.map(entry => (
        <div className="entry" key={entry['entry id']}>
          <p>
            <strong>Date:</strong>
            <Link to={`/description/${entry['entry id']}`} className="entryDate">{entry['entry date']}</Link>
          </p>
          <h2 className="entryTitle">{entry.title}</h2>
        </div>
      ))
    ) : null;
    return (
      <div className="events_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <Navigation />
            </div>
            <div className="col-sm-4">
              <legend className="Entry_title">My Entries</legend>
              {entries}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries,
});
export { Home as HomeTest };
export default connect(mapStateToProps, { getEntries })(Home);
