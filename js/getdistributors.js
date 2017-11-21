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
    var contactsRef = dbRef.ref('distributors');
    contactsRef.on('value', function (snapshot) {
        var distributor = [];
        for (var i  in snapshot.val()) {
            distributor.push(snapshot.val()[i]);

        }

        for (var t = 0; t < distributor.length; t++) {
            tbody = '<tr>' +
                '<td>' + distributor[t].name + '</td>' +
                '<td>' + distributor[t].email + '</td>' +
                '<td>' + distributor[t].phoneNo + '</td>' +
                '<td>' +'<button class="btn btn-success" onclick="disstrupit()" >&#x2705;</button>'+'&nbsp;&nbsp;&nbsp;'+'<button class="btn btn-danger" onclick="disstrupit()">X</button>'+'</td>' +
                '</tr>';
            request.row.add($(tbody)).draw();
        }

        console.log(distributor);


    });

    function disstrupit() {
        alert();
    }

    var userId = firebase.auth()
    // console.log(userId);


}());