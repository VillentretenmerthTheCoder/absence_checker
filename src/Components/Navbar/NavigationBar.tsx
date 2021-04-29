import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  
import styles from './NavigationBar.module.scss';

const  NavigationBar  = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
        return(
        <div>
            <Navbar className={styles.NavigationBar}  dark expand="md">
                <NavbarBrand href="/">Absence Checker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={{marginLeft: 100}} nav caret>
                        Actions
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Check Stats
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Log out
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
}

export default NavigationBar;