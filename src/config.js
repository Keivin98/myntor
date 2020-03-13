import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBhbsDi3tDbGJRuP4VEbG8iM7XBqyJTdVs',
  authDomain: 'myntor-4ee81.firebaseapp.com',
  databaseURL: 'https://myntor-4ee81.firebaseio.com',
  projectId: 'myntor-4ee81',
  storageBucket: 'gs://myntor-4ee81.appspot.com',
  messagingSenderId: '144049464873'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
