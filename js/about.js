(function () {

    const config = {
        apiKey: "AIzaSyAzmtOBtWYDL4srdRqEfZFiwsq1rs2JHOA",
        authDomain: "gasksa-de4ab.firebaseapp.com",
        databaseURL: "https://gasksa-de4ab.firebaseio.com",
        projectId: "gasksa-de4ab",
        storageBucket: "gasksa-de4ab.appspot.com",
        messagingSenderId: "193816669511"
    };





    firebase.initializeApp(config);


    var dbRef = firebase.database();
    var ar_about = dbRef.ref('ar_about');
    var en_about = dbRef.ref('en_about');
  //get about from database
    ar_about.once('value').then(function (arAbout) {
        arAbout.val()
    });
    en_about.once('value').then(function (enAbout) {
        enAbout.val()
    })
    //texts to be set to db
  var aboutArText
  var aboutEnText
    //set functions to db
ar_about.set(aboutArText)
en_about.set(aboutEnText)
}());