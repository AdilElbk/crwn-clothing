import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopePage from "./pages/shope-page/shoppage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
