import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Components/FirebaseConfig';

const FbAuth = () => {

  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider)

      .then((result) => {
        console.log(result);
      })
      
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
    </div>
  );
};

export default FbAuth;