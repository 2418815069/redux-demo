import React, { Component } from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import IndexList from '../view/index/list'

export default class ListRouter extends Component{
    render() {
        return (
            <Switch>
                <Route path="/index" exact render={()=>( <Redirect to="/index/all" />)}></Route>
                <Route path="/index/all" component={IndexList}></Route>
                <Route path="/index/ask" component={IndexList}></Route>
                <Route path="/index/share" component={IndexList}></Route>
                <Route path="/index/job" component={IndexList}></Route>
                <Route path="/index/dev" component={IndexList}></Route>
                <Route path="/index/good" component={IndexList}></Route>
            </Switch>
        )
    }
}