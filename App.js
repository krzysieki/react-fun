import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h1>Title</h1>
        <b>{txt}</b>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'this is the default text'
};

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);

export default App;
