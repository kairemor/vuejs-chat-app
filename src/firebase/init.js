import firebase from 'firebase';
import filestore from 'firebase/filestore';

var firebaseConfig = {
  apiKey: "AIzaSyBKOt3LWOcfFNhDH5K3cYKknfzwqBiI95U",
  authDomain: "fir-kairemor.firebaseapp.com",
  databaseURL: "https://fir-kairemor.firebaseio.com",
  projectId: "fir-kairemor",
  storageBucket: "fir-kairemor.appspot.com",
  messagingSenderId: "286111787795",
  appId: "1:286111787795:web:5b5d7ee0b962c770c908e6",
  measurementId: "G-WMPPRTCN08"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();
export default firebaseApp.filestore();
