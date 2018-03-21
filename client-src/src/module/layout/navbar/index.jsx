import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';

const activeItem = "editorials"

// class NavBar extends React.Component{
//     constructor(props){
//         super(props);

//         this.renderHelper = this.renderHelper.bind(this);
//         this.redirect = this.redirect.bind(this);
//     }

//     render(){
//         return (
//             <Menu>
//                 <Container>
//                     <Menu.Item
//                     name='editorials'
//                     active={activeItem === 'editorials'}
//                     onClick={this.handleItemClick}
//                     >
//                     Editorials
//                     </Menu.Item>

//                     <Menu.Item
//                     name='reviews'
//                     active={activeItem === 'reviews'}
//                     onClick={this.handleItemClick}
//                     >
//                     Reviews
//                     </Menu.Item>

//                     <Menu.Item
//                     name='upcomingEvents'
//                     active={activeItem === 'upcomingEvents'}
//                     onClick={this.handleItemClick}
//                     >
//                     Upcoming Events
//                     </Menu.Item>
//                 {this.renderHelper()}
//                 </Container>
//             </Menu>
//         );
//     }

//     renderHelper(){
//         if(true){
//             return (
//                 <Menu.Menu position="right">
//                     <Menu.Item
//                     name='upcomingEvents'
//                     active={activeItem === 'upcomingEvents'}
//                     onClick={this.handleItemClick}
//                     >
//                         Login
//                     </Menu.Item>
//                     <Menu.Item
//                     name='upcomingEvents'
//                     active={activeItem === 'upcomingEvents'}
//                     onClick={this.handleItemClick}
//                     >
//                         SignUp
//                     </Menu.Item>
//                 </Menu.Menu>
//             );
//         }else{
//             return (
//                 <Menu.Menu position="right">
//                     <Menu.Item
//                     name='upcomingEvents'
//                     onClick={this.redirect}
//                     >
//                         Logout
//                     </Menu.Item>
//                     <Menu.Item
//                     name='upcomingEvents'
//                     onClick={this.redirect}
//                     >
//                         Cart
//                     </Menu.Item>
//                 </Menu.Menu>
//             );
//         }
//     };

//     redirect(e){
//         let page="./login";
//         console.log(`redirect to ${page}`);
//         return (
//             <Redirect to={page}/>
//             );
//     }
// }

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            redirect:false
        }

        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.redirectToSignup = this.redirectToSignup.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
            <Menu>
                <Menu.Item header>Our Company</Menu.Item>
                <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
                <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
                <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
                
                {this.renderHelper()}
            </Menu>
        )
    }

    renderHelper(){
        if(true){
            return (
                <Menu.Menu position="right">
                    <Menu.Item name='login' active={activeItem === 'locations'} onClick={this.redirectToLogin} />
                    <Menu.Item name='signup' active={activeItem === 'locations'} onClick={this.redirectToSignup} />
                </Menu.Menu>
            );
        }else{
            return (
                <Menu.Menu position="right">
                    <Menu.Item
                    name='upcomingEvents'
                    onClick={this.redirect}
                    >
                        Logout
                    </Menu.Item>
                    <Menu.Item
                    name='upcomingEvents'
                    onClick={this.redirect}
                    >
                        Cart
                    </Menu.Item>
                </Menu.Menu>
            );
        }
    };
}

export default NavBar;  