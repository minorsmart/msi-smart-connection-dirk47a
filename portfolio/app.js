//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyCJ4ZA7SzlgGsDEA2ixnHb1cbmOcFRyUYo",
    authDomain: "portfolio-smart-industry.firebaseapp.com",
    databaseURL: "https://portfolio-smart-industry-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-smart-industry",
    storageBucket: "portfolio-smart-industry.appspot.com",
    messagingSenderId: "392920007593",
    appId: "1:392920007593:web:3ad4c49afdc8ab5be97ab8",
  };
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("gastenboek")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let voornaam = document.getElementById('voornaam').value
    let achternaam = document.getElementById('achternaam').value
    let bericht = document.getElementById('bericht').value
  
    //Save Form Data To Firebase
    db.doc().set({
      voornaam: voornaam,
      achternaam: achternaam,
      bericht: bericht
    }).then( () => {
      console.log("Data saved")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Je bericht is geplaatst in het gastenboek")
  })