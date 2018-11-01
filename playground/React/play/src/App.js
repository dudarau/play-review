import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './redux/actions';
import './App.css';

class App extends Component {
  simpleAction = () => {
    console.log(this.props.simpleReducer.index);
    this.props.simpleAction(this.props.simpleReducer.index || 0);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.simpleAction}>Test redux action</button>
        </header>
        <pre>
         {
           JSON.stringify(this.props)
         }
        </pre>
        <Tooltips />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  simpleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
