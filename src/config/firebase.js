import * as firebase from 'firebase';
import key from '../../key.json';

export default {
  _initialized: false,
  _user: null,

  init() {
    if(this._initialized) {
      console.log('Already initialized');
      return;
    }

    this._initialized = true;

    firebase.initializeApp({
      apiKey: `${key.API_KEY}`,
      authDomain: `${key.PROJECT_ID}.firebaseapp.com`,
      databaseURL: `https://${key.PROJECT_ID}.firebaseio.com`,
      storageBucket: `${key.PROJECT_ID}.appspot.com`,
    });

    return firebase;
  },

  get user() {
    return this._user;
  },

  signUpWithEmail(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  signInWithEmail(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
}