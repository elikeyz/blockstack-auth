import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Header() {
    return (
        <header>
            <Navbar variant="dark">
                <Navbar.Brand>Blockstack Auth</Navbar.Brand>
            </Navbar>
        </header>
    );
}

export default Header;