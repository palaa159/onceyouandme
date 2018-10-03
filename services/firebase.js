import * as firebase from 'firebase/app'
import 'firebase/database'

function initFirebase() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB7WVAzSlIKySZO_Akhuq-3KZf0qw3i1gY",
    authDomain: "onceyouandmewedding.firebaseapp.com",
    databaseURL: "https://onceyouandmewedding.firebaseio.com",
    projectId: "onceyouandmewedding",
    storageBucket: "onceyouandmewedding.appspot.com",
    messagingSenderId: "1053561254986"
  }
  if (!firebase.apps.length) {
    return firebase.initializeApp(config)
  }
  return
}

export {
  initFirebase
}
