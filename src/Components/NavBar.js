import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <>
        <Menu stackable className="logo">
          <Container>
            <Menu.Item>
              BMI Calculator
            </Menu.Item>
          </Container>
        </Menu>
      </>
    );
  }
}

export default NavBar;