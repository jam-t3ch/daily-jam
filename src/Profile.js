import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <>
        <img className='profilepic' src={user.picture} alt={user.name} />
        <p>{user.name}</p>
      </>
    )
  );
};

export default Profile;