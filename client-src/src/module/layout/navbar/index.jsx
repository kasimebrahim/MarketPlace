import React from 'react';
import {Menu, Container} from 'semantic-ui-react';

const activeItem = "editorials"

const NavBar = (props) => (
    <Menu>
        <Container>
            <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
            >
            Editorials
            </Menu.Item>

            <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
            >
            Reviews
            </Menu.Item>

            <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
            >
            Upcoming Events
            </Menu.Item>
        {renderHelper()}
        </Container>
    </Menu>
);

const renderHelper = ()=>{
    if(true){
        return (
            <Menu.Menu position="right">
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                    Login
                </Menu.Item>
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                    SignUp
                </Menu.Item>
            </Menu.Menu>
        );
    }else{
        return (
            <Menu.Menu position="right">
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                    Logout
                </Menu.Item>
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                    Cart
                </Menu.Item>
            </Menu.Menu>
        );
    }
};

export default NavBar;  