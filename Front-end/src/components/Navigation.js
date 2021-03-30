import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch,Redirect } from 'react-router-dom';
import Banner from '../components/Banner';
import User from '../components/User';
function Nav() {
    const title = 'Gérer les utilisateurs';
    return (
        <Router onEnter={Banner}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                        <Banner />
                        )
                    }}
                />
                <Route exact path='/creer' component={User}></Route>
                <Route exact path='/Banner' component={Banner} ></Route>
            </Switch>       
        </Router>

    )
}
export default Nav

