var firebaseConfig = {
    apiKey: "AIzaSyDLH0zZsfBzg3C8xdov5ZIqunTvaC73ItU",
    authDomain: "kwitter-app-c235f.firebaseapp.com",
    databaseURL: "https://kwitter-app-c235f-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-c235f",
    storageBucket: "kwitter-app-c235f.appspot.com",
    messagingSenderId: "668557668138",
    appId: "1:668557668138:web:2fe66f6dc0636f5e177853",
    measurementId: "G-VYJYZWK8BM"
  };
  //ini
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){}, {childKey  = childSnapshot.key,
    }  ,Room_names = childKey);
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
  }

  function getData(){
      firebase.database().ref("/").on('value',function(snapshot){
          document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot) {childKey =
            childSnapshot.key;Room_names=childKey;
            //start
            function redircetToRoomName(name){
                console.log(name);
                localStorage.setItem("room_name",name);
                window.location="kwitter_page.html";
                }
                redircetToRoomName();
                //end
                console.log("Room Name-"+Room_names);
          row="<div class='Room_name' id="+Room_names+"onclick='redircetToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
          document.getElementById("output").innerHTML+=row;
      });})
      {
  getData();
  
}}})}