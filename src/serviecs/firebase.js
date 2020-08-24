import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBS3Fdk2Gf6vKmfcebE-YRdJN-9kGWJwTc",
    authDomain: "chatapp-2f94e.firebaseapp.com",
    databaseURL: "https://chatapp-2f94e.firebaseio.com",
    projectId: "chatapp-2f94e",
    storageBucket: "chatapp-2f94e.appspot.com",
    messagingSenderId: "96986400912",
    appId: "1:96986400912:web:34b422794af7d350273015"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;