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
        var keys = [];
        var imgs=[]
        for (var i  in snapshot.val()) {

            if (snapshot.val()[i].state == 0) {
                distributor.push(snapshot.val()[i]);
                keys.push(i)
                imgs.push(snapshot.val()[i].imgType)
            }
        }

        for (var t = 0; t < distributor.length; t++) {


            tbody = '<tr>' +
                '<td>' + distributor[t].name + '</td>' +
                '<td>' +'<button class="btn btn-primary" onclick="hover()">صور الموزعين</button>'+'</td>'+
                '<td>' + distributor[t].email + '</td>' +
                '<td>' + distributor[t].phoneNo + '</td>' +
                '<td>' + '<button class="btn btn-success" onclick="accceptordecliend(' + t + ',1)">&#x2705;</button>' + '&nbsp;&nbsp;&nbsp;' + '<button class="btn btn-danger" onclick="accceptordecliend(' + t + ',2)">X</button>' + '</td>' +
                '</tr>';
            request.row.add($(tbody)).draw();

            accceptordecliend = function (params, state) {

                console.log(params);
                console.log(imgs[params]);
//get all
                for(var l=0;l<=imgs[params].length;l++) {
                    if (imgs[params][l]){

                        var storageRef = firebase.storage().ref(keys[params] + "/"+1);
                    storageRef.getDownloadURL().then(function (url) {
                        // Insert url into an <img> tag to "download"
                        // resolve(url);
                        console.log("img downloaded url", url);

                    }).catch(function (error) {
                        console.log("error ", error);
                    });
                }
                }
                contactsRef.child(keys[params] + '/state').set(state);
                $.notify("تم بنجاح");
                // location.reload();
            }
        }
        console.log(distributor);


    });

     hover =function() {
         $('#myModal').modal('show');


    };

    var userId = firebase.auth()
    // console.log(userId);


}());