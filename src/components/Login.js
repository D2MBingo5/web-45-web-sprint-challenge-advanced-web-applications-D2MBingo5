import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()

  // brought out of onSubmit for cleaner code
  const tokenCall = () => {
    axios.post(`http://localhost:5000/api/login`, credentials)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          localStorage.setItem('username', credentials.username)
          history.push('/bubbles')
        })
        .catch(err => {console.log(err)})
  }

  // useState used because this is a functional component, not a class component
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState('')
  //replace with error state

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value // like magic
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(credentials)
    if (credentials.username !== 'Lambda' || credentials.password !== 'School') {
      setError('Username or Password not valid.')
    } else {
      setError('')
      tokenCall()
    }
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={onSubmit}>
          <input 
            type='text'
            name='username'
            id='username'
            placeholder='username'
            // value={credentials.username} // I don't yet know if this is needed
            onChange={handleChange}
          />
          <input 
            type='password'
            name='password'
            id='password'
            placeholder='password'
            onChange={handleChange}
          />
          <button id='submit'>Log In</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"