const firebaseConfig = {
    apiKey: "AIzaSyBL5Y1VmTQOx9jkrvcpUemkspLRuHnxRfM",
    authDomain: "myporfolio-d982a.firebaseapp.com",
    projectId: "myporfolio-d982a",
    storageBucket: "myporfolio-d982a.appspot.com",
    messagingSenderId: "453651832054",
    appId: "1:453651832054:web:dbfeb48481e986c05b60d7"
  };
const app = firebase.initializeApp(firebaseConfig);
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.replace("dashboard/index.html");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });