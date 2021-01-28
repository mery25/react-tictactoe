import React from "react";
import { Route, Switch } from "react-router-dom";
import GameContainer from "./game/GameContainer"
import Home from "./home/Home"

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/tictactoe" component={Home} />
            <Route path="/tictactoe/game" component={GameContainer} />
        </Switch>
    );
};

export default AppRouter;