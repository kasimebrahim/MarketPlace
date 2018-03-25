import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Login, Signup, Content, AddItem} from '../../../module';

const Container = (props) => (

    <div className="container">
	    <Switch>
	        <Route path="/login" component={Login}/>
	        <Route path="/signup" component={Signup}/>
	        <Route path="/add" component={AddItem}/>
	        <Route path="/" component={Content}/>
	    </Switch>
    </div>
);

export default Container;