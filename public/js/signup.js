document.getElementById("submitSignup").addEventListener("click", function() {
    // Handle the Signup submission and redirect over here
    var Email = document.getElementById("signupEmail").value;
    var Password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(Email, Password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            // to see the unique user id
            console.log(user.uid);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

});

var provider = new firebase.auth.GoogleAuthProvider();

document.getElementById("googleSignup").addEventListener("click", function() {
    // Handle the Google Signup and redirect over here

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log("result", result);

            var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            console.log("token", token);
            // The signed-in user info.
            var user = result.user;
            console.log("user", user);

        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("error", errorCode, errorMessage, email, credential);
        });

});