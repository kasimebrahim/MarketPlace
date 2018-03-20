import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Login, Signup, Content} from '../../../module';

const Container = (props) => (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Content}/>
    </Switch>
);

export default Container;