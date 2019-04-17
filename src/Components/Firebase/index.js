import firebase from 'firebase/app';
import 'firebase/database';

const DB_CONFIG = {
  apiKey: 'AIzaSyCG58BqwBdWWogpojHrTZGsl5NKRbEmw44',
  authDomain: 'clicker-403ef.firebaseapp.com',
  databaseURL: 'https://clicker-403ef.firebaseio.com',
  projectId: 'clicker-403ef',
  storageBucket: 'clicker-403ef.appspot.com',
  messagingSenderId: '373913800586'
};

export default class Firebase {
  constructor() {
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app
      .database()
      .ref()
      .child('users');
  }

  addScoreToFireBase = (playerName, pointsToAdd) => {
    this.db.push({
      name: playerName,
      points: pointsToAdd
    });
  };

  getDataFromFireBase = (data, err) => this.db.on('value', data, err);
}
