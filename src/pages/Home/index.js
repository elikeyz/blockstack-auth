import React from 'react';
import * as blockstack from 'blockstack';
import Container from 'react-bootstrap/Container';
import './home.css';

function Home() {
    return (
        <main>
            <Container>
                <h1>Welcome to Blockstack Auth</h1>
                <p>Click here to sign in</p>
                <button className="btn" onClick={() => blockstack.redirectToSignIn()}>Sign In with Blockstack</button>
            </Container>
        </main>
    );
}

export default Home;