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
    var ar_about = dbRef.ref('ar_about/paragraph');
    var en_about = dbRef.ref('en_about/paragraph');
    var ar_terms = dbRef.ref('ar_terms/paragraph');
    var en_terms = dbRef.ref('en_terms/paragraph');

    $('#aboutGas').val(ar_about);
    $('#aboutGasen').val(en_about);
    // //get about from database
    //   ar_about.once('value').then(function (arAbout) {
    //       arAbout.val()
    //   });
    //   en_about.once('value').then(function (enAbout) {
    //       enAbout.val()
    //   })
    //
    //   en_about.once('value').then(function (enAbout) {
    //       enAbout.val()
    //   })
    //   en_about.once('value').then(function (enAbout) {
    //       enAbout.val()
    //   })
    //texts to be set to db

    var termsArText;
    var termsEnText;
    //set functions to db
    $('#save').on('click',function () {
        var aboutArText =$('#aboutGas').val();
        var aboutEnText =$('#aboutGasen').val();
        console.log(aboutArText);
        console.log(aboutEnText);
        ar_about.set(aboutArText);
        en_about.set(aboutEnText);
        window.location.reload()
    });

    // ar_terms.set(termsArText);
    // en_terms.set(termsEnText);
}());