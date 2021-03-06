import React, { useEffect, useContext } from 'react';
import * as blockstack from 'blockstack';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../contexts/profile-context';
import './home.css';

function Home() {
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        setProfile();
    }, [profile, setProfile]);

    if (Object.keys(profile).length < 1) {
        return (
            <main>
                <Container>
                    <h1>Welcome to Blockstack Auth</h1>
                    <p>Click here to sign in</p>
                    <button className="btn" onClick={() => blockstack.redirectToSignIn(window.location.origin)}>Sign In with Blockstack</button>
                </Container>
            </main>
        );
    } else {
        return (
            <main>
                <Container className="landing-container">
                    <h1>Welcome back, {profile.profile.name}</h1>
                    <p>Click here to go to your profile</p>
                    <Link to="/profile">
                        <button tabIndex="-1" className="btn">Go To My Profile</button>
                    </Link>
                </Container>
            </main>
        );
    }
}

export default Home;