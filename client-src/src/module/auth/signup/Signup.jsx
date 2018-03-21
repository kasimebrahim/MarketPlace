import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import {registerUser} from "./Signup-act";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class Signup extends React.Component {

  constructor(props){
    super(props)
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state={
      username:"",
      email:'',
      password:''
    }
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  register(e){
    this.props.registerUser({...this.state});
  }

  render(){
    if(this.props.signupSuc == true){
      return (<Redirect to="/login"/>);
    }
    return (
        <div className='signup-form'>
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.signup-form {
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
                <Image src='/logo.png' />
                {' '}Create your Account
              </Header>
              <Form size='large' onSubmit={this.register}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='username'
                    name='username'
                    value={this.state.username}
                    onChange={this.onChange}
                  />
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
                    onChange = {this.onChange}
                  />

                  <Button color='teal' fluid size='large'>signup</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      );
  } 

}

Signup.propTypes = {
  registerUser : PropTypes.func.isRequired
};


function mapStateToProp(state){
  return {
    signupSuc : state.Signup.SignupStat
  }
}

export default connect(mapStateToProp, {registerUser})(Signup);