import React from 'react';
import '../Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result.user);
      })
      .catch((error) => alert(error.message));

  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo.%282019%29.svg.png" alt="Fb-Logo" />

        <img src="https://user-images.githubusercontent.com/57510946/99006648-69cde780-2508-11eb-8236-0fd55703a02b.png" alt="fakebook inc" />
      </div>
      <Button type="submit" onClick={signIn}> Sign In</Button>
    </div>
  )
}

export default Login
