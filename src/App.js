import React, {Component} from 'react';
import Position from './components/Position';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="container">
          <h1 className="mt-5 bg-info p-3"> Weather API</h1>
          <Position />
        </div>
    </div>
    )
  }
}

export default App;
