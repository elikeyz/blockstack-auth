import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { ProfileContext } from '../../contexts/profile-context';

function Profile() {
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        setProfile();
        console.log(profile);
    }, [profile, setProfile]);

    return (
        <main>
            <Container>
                <h1>Profile</h1>
                {Object.keys(profile).length >= 1 && (
                <>
                    <p>{profile._profile.name}</p>
                    <p>{profile._profile.description}</p>
                </>
                )}
            </Container>
        </main>
    );
}

export default Profile;