import React, {Component} from 'react';
import './App.css';
import SuperCar from "./superCar";
import ErrorBoundary from "./error-boundary";

class App extends Component {
  render() {
    return (
    <div className="App">
      <ErrorBoundary>
        <SuperCar superCarName="Ferrari" />
      </ErrorBoundary>

      <ErrorBoundary>
        <SuperCar superCarName="Lamborghini" />
      </ErrorBoundary>

      <ErrorBoundary>
        <SuperCar superCarName="Bugatti" />
      </ErrorBoundary>
    </div>
  );
  }
}

export default App;
