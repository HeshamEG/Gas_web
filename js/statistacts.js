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
    $('#serach').on('click', function () {

        console.log('here');
        var from = $('#fromDate').val();
        var to = $('#toDate').val();

        var dates1 = from.split("-");
        var newDate = dates1[1] + "/" + dates1[0] + "/" + dates1[2];
        var date  =Date.parse(newDate);
        console.log(date);
        var ref = firebase.database().ref("history");
        ref.orderByChild("date").startAt(date).on("child_added", function (snapshot) {
            console.log(snapshot.key);
        });
    });

}());