import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapState(state){
  return {
    state
  };
}

function mapDispach(dispatch){
  return bindActionCreators({
    changeState : actionCreator
  }, dispatch);
};

const App = (props) => (
  <div>
    <h1>my app navbar</h1>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={Items}/>
    </Switch>
    <button type="reset" onClick={props.changeState}>change</button>
  </div>
);

const Items = () => (
  <div>
    <h3>Items</h3>
  </div>
);

const Login = () => (
  <div>
    <h3>Login</h3>
  </div>
);

const Signup = () => (
  <div>
    <h3>Signup</h3>
  </div>
);

const actionCreator =()=>({
  type:"changeState",
  payload:{
    state : "new state"
  }
});
export default connect(mapState, mapDispach)(App);
export {App};