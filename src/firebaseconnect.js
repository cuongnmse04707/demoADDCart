import firebase from 'firebase';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyC0lCbqzvAmxWKwRTUlCjZ-cKQacIUtTJU",
    authDomain: "demoweb-2d974.firebaseapp.com",
    databaseURL: "https://demoweb-2d974.firebaseio.com",
    projectId: "demoweb-2d974",
    storageBucket: "demoweb-2d974.appspot.com",
    messagingSenderId: "238207670917",
    appId: "1:238207670917:web:bffff69b3afdabe1e467ec",
    measurementId: "G-4Y1XP3YWBW"
  };

firebase.initializeApp(firebaseConfig);

// export const firebaseConnect = 

const storage = firebase.storage();

export {
    storage, firebase as default
}