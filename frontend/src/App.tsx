import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact={true} component={Landing}/>
          </Switch>
        </div>
      </Router>

    </ThemeProvider>

  );
}

export default App;
