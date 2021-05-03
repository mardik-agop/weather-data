// use Firebase authentication
import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyABnfYReKwWdVB2FbpZv-rwdYIaFn-0YJE",
    authDomain: "weather-e0a59.firebaseapp.com",
    projectId: "weather-e0a59",
    storageBucket: "weather-e0a59.appspot.com",
    messagingSenderId: "1036507952274",
    appId: "1:1036507952274:web:ff826644fd4ff78c7c224b"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;