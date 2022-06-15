import { Box, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useUser } from '../../context/userContext';
import { logInUserRequest } from '../../dataFetching';
import Layout from '../Layout';


function SignInPage() {

  const dispatch = useDispatch()

  // const { user } = useUser()

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    logInUserRequest()
      .then((response) => {
        console.log('user sign in response: ', response);
        dispatch({
          type: 'SIGN_IN',
          payload: {
            user: response.data
          }
        })

      });
  };

  const handleSignOut = () => {
    logInUserRequest()
      .then((response) => {
        console.log('user sign out response: ', response);
        dispatch({
          type: 'SIGN_OUT'
        })
      });
  };

  const user = useSelector(state => state.user);

  if (!user) {
    return (
      <Layout>
        <Box p={4}>
          <h1>Sign in</h1>
          <Box mb={3}>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              value={signInForm.email}
              onChange={(event) => {
                setSignInForm({ ...signInForm, email: event.target.value });
              }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="standard"
              value={signInForm.password}
              onChange={(event) => {
                setSignInForm({ ...signInForm, password: event.target.value });
              }}
            />
          </Box>
          <Button variant="contained" onClick={onSubmit}>Sign in</Button>
        </Box>
      </Layout>
    );
  } else {
    const firstName = user.firstName
    return (
      <Layout>
        <Box p={4}>
          <h1>Welcome, {firstName}</h1>
          <Button variant="contained" onClick={handleSignOut}>Sign Out</Button>
        </Box>
      </Layout>
    )
  }


}

export default SignInPage;
