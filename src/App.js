import React, {useState, useEffect} from 'react';
import './App.css';
import fire from './fire'; // import fire from firebase component
import Login from './Login'; // import Login from Login component
import Hero from './Hero'; // import Hero from Hero component

function App() {

  // store all states is usestate
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAcount, setHasAcount] = useState(false);

  // clear inputs function
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  // clear errors function
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  // login function
  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  // sign up function
  const handleSignup = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/week-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  // logout function
  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, []);

  // check if the user is exist or not
  // if user is exist return Hero component
  // if not return Login component
  return (
    <div className="App">
      {/* send states to Login component */}
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
        // send states to Login component
          <Login 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSignup={handleSignup} 
            hasAcount={hasAcount} 
            setHasAcount={setHasAcount} 
            emailError={emailError} 
            passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
