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
    var refGetPrice = firebase.database().ref();
    refGetPrice.child('pipeprice').once('value').then(function (currentPrice) {
        console.log(currentPrice.val())
        document.getElementById('GasPrice').value = currentPrice.val();
    })

    $('#savepriceofgas').click(function () {
        var price = document.getElementById('GasPrice').value;

        console.log(price);
        var ref = firebase.database().ref();
        ref.child('pipeprice').set(price)
    });


    $('#logout').click(function () {
        firebase.auth().signOut();
        console.log(firebase.auth().signOut())
        window.location.href = '../';

    });

}());