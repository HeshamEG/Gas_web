(function () {
alert()
    const config = {
        apiKey: "AIzaSyAzmtOBtWYDL4srdRqEfZFiwsq1rs2JHOA",
        authDomain: "gasksa-de4ab.firebaseapp.com",
        databaseURL: "https://gasksa-de4ab.firebaseio.com",
        projectId: "gasksa-de4ab",
        storageBucket: "gasksa-de4ab.appspot.com",
        messagingSenderId: "193816669511"
    };
    firebase.initializeApp(config);
    var price = $('#GasPrice').val();

    $('#savepriceofgas').click(function () {
        alert();
        console.log(price);
        var ref = firebase.database().ref();
        ref.child('pipeprice').set(price)
    });


    $('#logout').on('click',function () {
            firebase.fireAuth.signOut();


    });

});