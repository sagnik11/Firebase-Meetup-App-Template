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

document.getElementById("googleSignup").addEventListener("click", function() {
    // Handle the Google Signup and redirect over here
});