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
            console.log(history[t])
            var details= dbRef.ref('history/'+history[t]);
            details.once('value').then(function (snapshot){
               var refCustomerName= dbRef.ref('customers/'+snapshot.val().customerID+'/name');
                refCustomerName.once('value').then(function (name){
                    console.log(name.val())

                })
                console.log(snapshot.val())

            })

        }
        // for (var t = 0; t < distributor.length; t++) {
        //
        //
        //     tbody = '<tr>' +
        //         '<td>' + distributor[t].name + '</td>' +
        //         '<td>' + '<button class="btn btn-primary" onclick="hover(' + t + ')">صور الموزعين</button>' + '</td>' +
        //         '<td>' + distributor[t].email + '</td>' +
        //         '<td>' + distributor[t].phoneNo + '</td>' +
        //         '<td>' + '<button class="btn btn-success" onclick="accceptordecliend(' + t + ',1)">&#x2705;</button>' + '&nbsp;&nbsp;&nbsp;' + '<button class="btn btn-danger" onclick="accceptordecliend(' + t + ',2)">X</button>' + '</td>' +
        //         '</tr>';
        //     request.row.add($(tbody)).draw();
        //
        //     // accceptordecliend = function (params, state) {
        //     //
        //     //     console.log(params);
        //     //     contactsRef.child(keys[params] + '/state').set(state);
        //     //     $.notify("تم بنجاح");
        //     //     location.reload();
        //     // };
        //
        // }




    });



}());