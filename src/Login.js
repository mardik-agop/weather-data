import React from 'react'

const Login = (props) => {
  // get all props from App component
  const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAcount, setHasAcount, emailError, passwordError} = props;
  return (
    <section className="login">
      <div className="loginContainer">
      <h3>Check the weather in your city</h3>
        <label>Username</label>
        <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {/* check if the use has acount or not */}
          {hasAcount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>Dont Have An Acount ? <span onClick={() => setHasAcount(!hasAcount)}>Sign Up</span></p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign Up</button>
              <p>Have An Acount ? <span onClick={() => setHasAcount(!hasAcount)}>Sign In</span></p>
          </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Login
