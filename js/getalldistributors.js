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

    var request = $('#UsersTable').DataTable();

    var dbRef = firebase.database();
    var contactsRef = dbRef.ref('distributors');
    contactsRef.on('value', function (snapshot) {
        var distributor = [];
        var keys = [];
        // var imgs = []
        for (var i  in snapshot.val()) {

            // if (snapshot.val()[i].state == 0) {
            distributor.push(snapshot.val()[i]);
            keys.push(i)
            // imgs.push(snapshot.val()[i].imgType)
            // }
        }
        // hover = function (params) {
        //     console.log(params);
        //     console.log(imgs[params].length);
        //     console.log(imgs[params]);
        //
        //     $('#myModal').modal('show');
        //     // $('.dissrc').append('<img src='/' class="img-responsive" /><hr>');
        //     //get all
        //
        //     for (var l = 0; l < imgs[params].length; l++) {
        //
        //         if (imgs[params][l]) {
        //
        //             var storageRef = firebase.storage().ref(keys[params] + "/" + l);
        //             storageRef.getDownloadURL().then(function (url) {
        //                 // Insert url into an <img> tag to "download"
        //                 // resolve(url);
        //                 console.log("img downloaded url", url);
        //                 $('.dissrc').append('<img src='+url+' class="img-responsive" /><hr>');
        //             }).catch(function (error) {
        //                 console.log("error ", error);
        //             });
        //         }
        //     }
        //
        //
        // };
        for (var t = 0; t < distributor.length; t++) {


            if (distributor[t].state == 1) {
                tbody = '<tr>' +
                    '<td>' + distributor[t].name + '</td>' +
                    '<td>' + distributor[t].email + '</td>' +
                    '<td>' + distributor[t].phoneNo + '</td>' +
                    '<td>' + distributor[t].credit + '</td>' +
                    '<td>'+distributor[t].totalcredit+'</td>' +
                    '<td><button class="btn btn-primary" onclick="MangePackage(' + t + ')">إدارة الباقة</button></td>' +
                    '<td>' + '<button class="btn btn-warning" onclick="accceptordecliend(' + t + ',0)">' + 'تعطيل' + '</button>' + '&nbsp;&nbsp;&nbsp;' + '<button class="btn btn-danger" onclick="hestory(' + t + ')">سجل العمليات</button>' + '</td>' +
                    '</tr>';
            } else {
                tbody = '<tr>' +
                    '<td>' + distributor[t].name + '</td>' +
                    '<td>' + distributor[t].email + '</td>' +
                    '<td>' + distributor[t].phoneNo + '</td>' +
                    '<td>' + distributor[t].credit + '</td>' +
                    '<td>'+distributor[t].totalcredit+'</td>' +
                    '<td><button class="btn btn-primary" onclick="MangePackage(' + t + ')">إدارة الباقة</button></td>' +
                    '<td>' + '<button class="btn btn-success" onclick="accceptordecliend(' + t + ',1)">' + 'تفعيل' + '</button>' + '&nbsp;&nbsp;&nbsp;' + '<button class="btn btn-danger" onclick="hestory(' + t + ')">سجل العمليات</button>' + '</td>' +
                    '</tr>';
            }
            request.row.add($(tbody)).draw();

            accceptordecliend = function (params, state) {

                console.log(params);
                contactsRef.child(keys[params] + '/state').set(state);
                $.notify("تم بنجاح");
                location.reload();
            };

            MangePackage = function (params) {

                $('#Package').modal('show');

                $('#addpackage').on('click', function () {
                    console.log('click');
                    var amount = document.getElementById('currentcridt').value;
                    console.log(amount);
                    distributorId = keys[params];
                    console.log(distributorId);

                        var creditRef=firebase.database().ref('distributors/' + distributorId + '/credit');
                        var totalcreditRef=firebase.database().ref('distributors/' + distributorId + '/totalcredit');
                        console.log(creditRef);
                        creditRef.once('value').then(function (currentcredit) {
                            console.log('credit',currentcredit.val());
                            var newCredit = parseInt(currentcredit.val()) + parseInt(amount);
                            creditRef.set(newCredit);
                            totalcreditRef.set(newCredit)
                        })

                });


            };


        }

        hestory = function (params) {
            console.log(keys[params]);
            window.location.href = 'history.html?distributorsid=' + keys[params]

        }


    });


    var userId = firebase.auth()
    // console.log(userId);


}());