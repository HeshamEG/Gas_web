(function(email,password){
// <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
// <script>
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAzmtOBtWYDL4srdRqEfZFiwsq1rs2JHOA",
    authDomain: "gasksa-de4ab.firebaseapp.com",
    databaseURL: "https://gasksa-de4ab.firebaseio.com",
    projectId: "gasksa-de4ab",
    storageBucket: "gasksa-de4ab.appspot.com",
    messagingSenderId: "193816669511"}
  firebase.initializeApp(config);
// </script>

if(email=='gasforksa'){
    firebase.auth().signInWithEmailAndPassword(email+'@gmail.com', password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

    });
    console.log(firebase.auth())

}else{
  console.log('notAdmin');
}
}());