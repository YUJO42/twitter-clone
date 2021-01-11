import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    if (name === 'google') {
      await authService.signInWithPopup(
        new firebaseInstance.auth.GoogleAuthProvider(),
      );
    } else if (name === 'github') {
      await authService.signInWithPopup(
        new firebaseInstance.auth.GithubAuthProvider(),
      );
    }
  };

  return (
    <div>
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
