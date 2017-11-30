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
        var arrcomplated = [];
        var arrcancled = [];
        console.log('here');
        var from = $('#fromDate').val();
        var to = $('#toDate').val();

        var dates1 = from.split("-");
        var newDate = dates1[1] + "/" + dates1[0] + "/" + dates1[2];
        var date = Date.parse(newDate);
        var dates2 = to.split("-");
        var newDate2 = dates2[1] + "/" + dates2[0] + "/" + dates2[2];
        var date2 = Date.parse(newDate2);
        var completed = 0
        var canceled = 0
        // var promise=new Promise((resolve,reject),function () {

        var ref = firebase.database().ref("history");
        ref.orderByChild("date").startAt(date).endAt(date2).on("child_added", function (snapshot) {
            // console.log(snapshot.val().status);
            if (snapshot.val().status === 'delivered') {
                completed++
                arrcomplated.push(completed);

            }
            if (snapshot.val().status === 'rejected') {
                canceled++
                arrcancled.push(canceled);

            }
// resolve(completed)
            // });
            // }).then(function () {
            // console.log(arrcomplated, arrcancled);


        });
        setTimeout(function(){
            console.log(canceled, completed)
        },1000)
        // console.log(arrcomplated.last() );
        // console.log(arrcomplated.lastElementChild );
        // console.log(arrcomplated.lastIndex );

        // $('#complete').append('<h4>' + completed + '</h4>');
        // $('#canceld').append('<h4>' + canceled + '</h4>');
        // console.log(arrcomplated[0].length, arrcancled);

    });

}());