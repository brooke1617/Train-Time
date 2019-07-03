var firebaseConfig = {
  apiKey: "AIzaSyA6ytJQTlueUv5OFZ_0pmBJawgptLK7cVM",
  authDomain: "train-project-656a7.firebaseapp.com",
  databaseURL: "https://train-project-656a7.firebaseio.com",
  projectId: "train-project-656a7",
  storageBucket: "",
  messagingSenderId: "668619532825",
  appId: "1:668619532825:web:a7416c3f9707c134"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


$('form').on('submit', function (event) {
  event.preventDefault();
  var trainName = $('input[name=train-name]').val().trim();
  var destination = $('input[name=destination]').val().trim();
  var firstTrainTime = $('input[name=first-train-time]').val().trim();
  var frequency = $('input[name=frequency]').val().trim();


  database.ref().push({
    name: trainName,
    dest: destination, 
    firt: firstTrainTime, 
    freq: frequency
  })
})

database.ref().on("child_added", function(response){
  console.log(response.val());
var name = response.val().name;
var destination = response.val().dest;
 var firstTrain =  response.val().firt;
 var frequency = response.val().freq;
//  var nextTrain = response.text('');
 $("#trainTime").append("<p>" + name + "</p>");
 $("#arrival").append("<p>" + destination + "</p>");
 $("#firstTrain").append("<p>" + firstTrain + "</p>");
 $("#howOften").append("<p>" + frequency + "</p>");
// console.log(name, destination, firstTrain, frequency)
})