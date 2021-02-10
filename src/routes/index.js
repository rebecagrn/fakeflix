import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../components/Favorites";
import Watchlater from "../components/Watchlater";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/browse"]} exact component={Home} />
        <Route path={"/favorites"} component={Favorites} />
        <Route path={"/watch-later"} component={Watchlater} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
