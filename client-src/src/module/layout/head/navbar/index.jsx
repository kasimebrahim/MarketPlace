import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';

const activeItem = "editorials";

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            redirect:false
        }

        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.redirectToSignup = this.redirectToSignup.bind(this);
    }

    handleItemClick = (e) => {
        console.log(`item clicked ${e.target.name}`);
        return this.setState({ activeItem: e.target.name });
    }

    redirectToLogin(e){
        this.setState({redirect:'./login'});
    }
    redirectToSignup(e){
        this.setState({redirect:'./signup'});
    }

    render() {
        const { activeItem } = this.state
        if(this.state.redirect){
            this.setState({redirect:false});
            return<Redirect to={this.state.redirect}/>;
        }
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">

                <button className="navbar-toggler" data-toggle="collapse" data-target="#toggle-target">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="toggle-target">

                    <a className="nav-brand nav-brand-image"> <img src="/assets/imgs/logo2.svg" alt="logo"/></a>
                    <span className="navbar-text nav-brand-text">Market place</span> 

                    <ul className="navbar-nav container-fluid">
                        <li className="nav-item">
                            <a className="nav-link" name='aboutUs' onClick={this.handleItemClick} > aboutUs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name='jobs' onClick={this.handleItemClick}> jobs </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name='locations' onClick={this.handleItemClick}>locations</a>
                        </li>
                    {
                        this.renderHelper()
                    }
                    </ul>
                </div>
                
                
            </nav>
        )
    }

    renderHelper(){
        if(true){
            return (
                <li className="nav-item container-fluid" >
                    <div className="dropdown float-right">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="dropdown-target" name='your-account' >
                         Your Account 

                            <span className="caret"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown-target">
                                <a className="dropdown-item" name="login" onClick={this.redirectToLogin}>login</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" name="signup" onClick={this.redirectToSignup}>signup</a>
                        </div>
                    </div>
                </li>
            );
        }else{
            return (
                <p>logout
                cart</p>
            );
        }
    };
}

export default NavBar;  