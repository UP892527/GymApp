//The connection location of the Firebase for javascript can find the Database
  var firebaseConfig = {
    apiKey: "AIzaSyBEJuxPQk7kgHg6KWNk4OqmiO2ji5XCSaM",
    authDomain: "gymapp-cb244.firebaseapp.com",
    databaseURL: "https://gymapp-cb244.firebaseio.com",
    projectId: "gymapp-cb244",
    storageBucket: "gymapp-cb244.appspot.com",
    messagingSenderId: "33396281966",
    appId: "1:33396281966:web:7e477a69afc5c3626d4c7f",
    measurementId: "G-7WHJHCN3T0"
  };

  //Initialise Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

$(function () {

 $('.pop-button').popover({
   trigger: 'focus'
 });
});

$('.popover-header').click(function() {
 $('.pop-button').popover('hide');
});


  //when deleteWorkout button is clicked its contents will be displayed
  document.getElementById("btn").addEventListener("click",function(){
    document.querySelector("#myBtnContainer2").style.display="block";
    //document.querySelector("#myBtnContainer").style.display="none";
        //document.querySelector("#myBtnContainer3").style.display="none";
  });
//when addWorkout button is clicked html contents of delete  will be hidden
  document.getElementById("add").addEventListener("click",function(){
    document.querySelector("#myBtnContainer2").style.display="none";
  });








      //db.collection("exercises").doc("workoutName").delete().then(function() {
//console.log("Document successfully deleted!");
//}).catch(function(error) {
//    console.error("Error removing document: ", error);
//});

let iu = document.getElementById("del").value;

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
console.log("User logged in")
} else {
console.log("No user logged in!")
};
});
function logout() {
firebase.auth().signOut().then(function(user) {
firebase.auth().onAuthStateChanged(user => {
 if(user = null) {
  window.location = 'index.html';
  }

}).catch(function(error) {
console.log("User still logged");
})
})};



      function removeData(){

      document.querySelector(".container").innerHTML=  "you have deleted"+" "+document.getElementById("del").value;

    }
module.exports = RemoveData;
module.exports = firebase;
