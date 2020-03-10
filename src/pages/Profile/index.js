import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { UserSession } from 'blockstack';
import { Redirect } from 'react-router-dom';
import { ProfileContext } from '../../contexts/profile-context';
import './profile.css';

function Profile() {
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        setProfile();
        console.log(profile);
    }, [profile, setProfile]);

    const profileUserSession = new UserSession();
    if (!profileUserSession.isUserSignedIn()) {
        return (
            <Redirect to="/" />
        );
    }
    return (
        <main>
            <Container className="profile-container">
                <h1>Profile</h1>
                {Object.keys(profile).length >= 1 && (
                <section className="profile-content">
                    <div className="image-container">
                        <img src={profile._profile.image[0].contentUrl} alt="Profile avatar" />
                    </div>
                    <p className="profile-name">{profile._profile.name}</p>
                    <p>{profile._profile.description}</p>
                </section>
                )}
            </Container>
        </main>
    );
}

export default Profile;