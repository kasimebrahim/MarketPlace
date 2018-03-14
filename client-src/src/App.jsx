import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavBar, Login, Container } from './module';
import './App.css';

const App = (props)=>(
    <div>
        <NavBar/>
        <Container/>
    </div>
    
);
export {App};