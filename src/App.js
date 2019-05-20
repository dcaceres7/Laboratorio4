import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import Home from "./components/Home";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact="/" component={Home}/>
      <Route component={Home}/>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;