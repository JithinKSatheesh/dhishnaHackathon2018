// Initialize Firebase
var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);





function register(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        console.log('SIGNED IN');
        window.location = 'detail.html';
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
    });
}
function signout() {
    firebase.auth().signOut().then(function () {
        console.log("user signed out");
        window.location = 'index.html';
    }).catch(function (error) {
        console.log("some error occured during sign out");
    });
}


function getdetails(){
    var user = firebase.auth().currentUser
    console.log(user)

}