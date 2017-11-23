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

    var request = $('#RequestTable').DataTable();

    var dbRef = firebase.database();
    var contactsRef = dbRef.ref('distributors/phQADWfuuBYeb8Omv6RFIVR50Up1/history');
    contactsRef.once('value').then(function  (snapshot) {
        var history = [];
        var keys = [];
        for (var i  in snapshot.val()) {
console.log(i)
            dbRef.ref('history/'+i)
            history.push(i);

        }
        for (var t = 0; t < history.length; t++) {
            console.log(history[t]);
            var details= dbRef.ref('history/'+history[t]);
            details.once('value').then(function (snapshot){
               var refCustomerName= dbRef.ref('customers/'+snapshot.val().customerID+'/name');

               refCustomerName.once('value').then(function (name){
                    console.log(name.val());
                });
                console.log(snapshot.val());

            })

        }


    });



}());