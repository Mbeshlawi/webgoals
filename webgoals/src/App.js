import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "typeface-roboto";
import "./App.css";
import GoalList from "./components/GoalList";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Grid container justify='center' spacing={8}>
          <Grid item xs={12} sm={4}>
            <GoalList />
          </Grid>
          <Grid item xs={12} sm={4}>
            <GoalList />
          </Grid>
          <Grid item xs={12} sm={4}>
            <GoalList />
          </Grid>
        </Grid>
      </div>
    );
  }
}
//test test test
export default App;
