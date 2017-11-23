(function () {

    const config = {
        apiKey: "AIzaSyAzmtOBtWYDL4srdRqEfZFiwsq1rs2JHOA",
        authDomain: "gasksa-de4ab.firebaseapp.com",
        databaseURL: "https://gasksa-de4ab.firebaseio.com",
        projectId: "gasksa-de4ab",
        storageBucket: "gasksa-de4ab.appspot.com",
        messagingSenderId: "193816669511"
    };

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    disid = getUrlParameter('distributorsid');
    console.log(disid);

    firebase.initializeApp(config);

    var request = $('#RequestTable').DataTable();

    var dbRef = firebase.database();
    var contactsRef = dbRef.ref('distributors/' + disid + '/history');
    contactsRef.once('value').then(function (snapshot) {
        var history = [];
        var data = [];
        var names=[]
        for (var i  in snapshot.val()) {
            dbRef.ref('history/' + i)
            history.push(i);

        }
        // console.log(history);
        for (var t = 0; t < history.length; t++) {
            var details = dbRef.ref('history/' + history[t]);
            details.once('value').then(function (res) {
                data.push(res.val());
                var refCustomerName = dbRef.ref('customers/' + res.val().customerID + '/name');

                // console.log(data);
                refCustomerName.once('value').then(function (name) {

                    names.push(name.val())
                });


            })

        }
        console.log(data,names);

    });


}());