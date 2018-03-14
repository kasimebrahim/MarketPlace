import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Login, Signup, Items} from '../../../module';

const Container = (props) => (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Items}/>
    </Switch>
);

export default Container;