import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {login} from './Login-act';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{

  constructor(props){
    super(props);

    this.state={
      email:"",
      password:""
    }

    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  login(){
    this.props.login(this.state);
  }

  render(){
    if(this.props.loginStat == 200){
      return (<Redirect to="/"/>);
    }
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/assets/imgs/ls2.png' />
              {' '}Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.login}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />

                <Button type='submit' color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  login : PropTypes.func.isRequired
};

function mapStateToProp(state){
  return ({
    loginStat: state.User.status
  });
}

export default connect(mapStateToProp, {login})(Login);