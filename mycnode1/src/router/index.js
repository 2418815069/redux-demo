import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from '../view/index/index';
import About from '../view/about/index';
import Book from '../view/book/index';
import User from '../view/user/index';
import Details from '../view/details/index';

class RouterIndex extends React.Component{
    render() {
      return (
        <Switch>
            <Route path="/" exact render={()=>(
                <Redirect to="/index" />
            )} />
            <Route path="/index" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/book" component={Book} />
            <Route path="/user" component={User} />
            <Route path="/details" component={Details} />
        </Switch>
      )
    }   
}

export default RouterIndex;