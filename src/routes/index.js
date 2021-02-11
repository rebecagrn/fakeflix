import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../components/Favorites";
import Watchlater from "../components/Watchlater";
import Search from "../pages/Search";
import NoMatch from "../components/NoMatch";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/browse"]} exact component={Home} />
        <Route path={"/favorites"} component={Favorites} />
        <Route path={"/watch-later"} component={Watchlater} />
        <Route path={"/search"} component={Search} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
