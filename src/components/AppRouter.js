import React from "react";
import { Route, Switch } from "react-router-dom";
import GameContainer from "./game/GameContainer"

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/game" component={GameContainer} />
        </Switch>
    );
};

export default AppRouter;