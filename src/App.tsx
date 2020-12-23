import React from "react";
import { Provider } from "react-redux";
import store from "./store}"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import City from "./pages/City";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} /><Route path="/:city" component={City} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
requireStack: [
  'C:\\Users\\jaded\\AppData\\Roaming\\npm\\node_modules\\postcss-cli\\index.js',
  'C:\\Users\\jaded\\AppData\\Roaming\\npm\\node_modules\\postcss-cli\\bin\\postcss'
]
