//firebase links
var firebaseConfig = {
    apiKey: "AIzaSyBaF97phUuRzjC_zp3bfAX0KY8d80Zjwm4",
    authDomain: "project-kwitter-ecac8.firebaseapp.com",
    projectId: "project-kwitter-ecac8",
    storageBucket: "project-kwitter-ecac8.appspot.com",
    messagingSenderId: "836733099685",
    appId: "1:836733099685:web:ee6de0c5f492dea403774c",
    measurementId: "G-30RFX54KW9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//var to fill in firebase
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");
//send function
function send(){
   msg=document.getElementById("mes").value;
   firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
   });
   document.getElementById("mes").value="";
}
//logout
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html";
}