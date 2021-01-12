import React from "react";
import { Route, Switch } from "react-router-dom";
import GameContainer from "./game/GameContainer"
import Home from "./home/Home"

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={GameContainer} />
        </Switch>
    );
};

export default AppRouter;