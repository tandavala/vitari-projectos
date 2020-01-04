import React from "react";

import HomePage from "../HomePage";
import Dashboard from "../Dashboard";
import Register from "../Register";
import Login from "../Login";

/*components required to use material-ui*/
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

/*required components for routing*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme();

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
