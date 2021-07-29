import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAghUNV74Wlq6XMSnjaSZ4WphyHiEkFyEk",
    authDomain: "agenda-online-bf473.firebaseapp.com",
    projectId: "agenda-online-bf473",
    storageBucket: "agenda-online-bf473.appspot.com",
    messagingSenderId: "979357744209",
    appId: "1:979357744209:web:7bfcec98c8ed45e9658c70",
    measurementId: "G-RQC0D3MW41",
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase;