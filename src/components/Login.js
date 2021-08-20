import React, { useState } from "react";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // props = {
  //   credentials: {
  //     username: '',
  //     password: ''
  //   }
  // }
  // const credentials = {
  //   username: '',
  //   password: ''
  // }
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  console.log(credentials)

  const {
    submit,
    change,
    errors
  } = props

  const [error, setError] = useState('')
  //replace with error state

  const handleChange = e => {
    // const { name, value } = e.target
    // const valToUse = value
    // setCredentials(name, valToUse)
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    })
    console.log(credentials)
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form>
          <input 
            type='text'
            name='username'
            id='username'
            placeholder='username'
            // value={credentials.username}
            onChange={handleChange}
          />
          <input 
            type='password'
            name='password'
            id='password'
            placeholder='password'
            onChange={handleChange}
          />
          <button>Log In</button>
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