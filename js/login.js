(function () {
// <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
// <script>
    // Initialize Firebase

    const config = {
        apiKey: "AIzaSyAzmtOBtWYDL4srdRqEfZFiwsq1rs2JHOA",
        authDomain: "gasksa-de4ab.firebaseapp.com",
        databaseURL: "https://gasksa-de4ab.firebaseio.com",
        projectId: "gasksa-de4ab",
        storageBucket: "gasksa-de4ab.appspot.com",
        messagingSenderId: "193816669511"
    };
    firebase.initializeApp(config);
// </script>
    console.log();
    /////////////////
    document.querySelector('.addvalue')
        .addEventListener("click", function (event) {
            event.preventDefault();
            if (document.querySelector('#email').value != '' || document.querySelector('#paassword').value != '') {
                email= document.querySelector('#email').value
                password=document.querySelector('#password').value
                console.log(email);
                console.log(password);
                if (email === 'gasforksa') {
                    firebase.auth().signInWithEmailAndPassword(email + '@gmail.com',password).then(function (user) {
                        window.location.href = 'Admin/index.html'
                        return user;

                    }).catch(function (error) {

                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ...
                        return errorMessage;
                    });

                    console.log(firebase.auth())

                } else {
                    console.log('notAdmin');
                    return 'notAdmin'
                }
            } else {
                alert('Please fill atlease name or email!');
            }
        }, false);

    /////////////

}());