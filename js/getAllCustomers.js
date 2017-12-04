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

    var request = $('#ClintTable').DataTable();

    var dbRef = firebase.database();
    var contactsRef = dbRef.ref('customers');
    contactsRef.on('value', function (snapshot) {
        var distributor = [];
        var keys = [];

        try {
            request
                .clear()
                .draw();
        }
        catch (ex) {
            // alert("error");
            console.log(ex);
        }
        for (var i  in snapshot.val()) {

            distributor.push(snapshot.val()[i]);
            keys.push(i)

        }

        for (var t = 0; t < distributor.length; t++) {


            if (distributor[t].state == 1) {
                tbody = '<tr>' +
                    '<td>' + distributor[t].name + '</td>' +
                    '<td>' + distributor[t].email + '</td>' +
                    '<td>' + distributor[t].phoneNo + '</td>' +
                    '<td>' + '<button class="btn btn-danger" onclick="hestory(' + t + ')">سجل العمليات</button>' + '</td>' +
                    '</tr>';
            } else {
                tbody = '<tr>' +
                    '<td>' + distributor[t].name + '</td>' +
                    '<td>' + distributor[t].email + '</td>' +
                    '<td>' + distributor[t].phoneNo + '</td>' +
                    '<td>' + '<button class="btn btn-danger" onclick="hestory(' + t + ')">سجل العمليات</button>' + '</td>' +
                    '</tr>';
            }
            request.row.add($(tbody)).draw();

            accceptordecliend = function (params, state) {

                console.log(params);
                contactsRef.child(keys[params] + '/state').set(state);
                $.notify("تم بنجاح");
                location.reload();
            };

        }

        hestory = function (params) {
            console.log(keys[params]);
            window.location.href = 'clintHistory.html?distributorsid=' + keys[params]

        }


    });


}());