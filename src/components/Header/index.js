import React, { useEffect, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import * as blockstack from 'blockstack';
import { ProfileContext } from '../../contexts/profile-context';
import './header.css';

function Header() {
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        setProfile();
        console.log(profile);
    }, [profile, setProfile]);

    return (
        <header>
            <Navbar variant="dark">
                <Link to="/">
                    <Navbar.Brand>Blockstack Auth</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                {Object.keys(profile).length >= 1 && (
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/profile">
                            <div className="avatar-container">
                                <img src={profile._profile.image[0].contentUrl} alt="User avatar" />
                            </div>
                        </Link>
                        <Nav.Link href="#" onClick={(e) => {
                            e.preventDefault();
                            blockstack.signUserOut(window.location.origin);
                        }}>Sign Out</Nav.Link>
                    </Navbar.Collapse>
                )}
            </Navbar>
        </header>
    );
}

export default Header;