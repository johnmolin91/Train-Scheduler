// var trainName;
// var destination;
// var frequency;
// var arrivalTime;

// var newData = {
//     name: trainName,
//     dest: destination,
//     freq: frequency,
//     arri: arrivalTime
//   };

// // var elements = document.getElementsByTagName('td');

// // var database = firebase.database();

// // database.ref().on("value", function(snapshot) {

// 	$("#submitInfo").on("click", function(){



// trainName = snapshot.val().trainName;
// destination = snapshot.val().destination;
// frequency = parseInt(snapshot.val().frequency);
// arrivalTime = parseInt(snapshot.val().arrivalTime);

// });

// // $("#nameInfo").html(trainName);
// // $("#destinationInfo").html(destination);
// // $("#frequencyIn[fo").html(frequency);
// // $("#nextInfo").html(arrivalTime);

// firebase.database().ref().push({
//     trainName: inputValName,
//     destination: inputValDestination,
//     frequency : inputValFrequency,
//     arrivalTime: inputValNext
// });

// // firebase.initializeApp(config);

// // function(error) {
// //           console.log("The read failed: " + error.code);
// //         };   

// var user = snapshot.val();
// if (user == null) { /* error */}



// 	var inputValName = $('#inputName').val().trim();
// 	// var trainName = $("#nameInfo").append(inputValName);

// 	var inputValDestination = $('#inputDestination').val().trim();
// 	// var destination = $('#destinationInfo').append(inputValDestination);

// 	var inputValFrequency = $('#inputFrequency').val().trim();
// 	// var frequency = $('#frequencyInfo').append(inputValFrequency);

// 	var inputValNext = $('#inputFirst').val().trim();
// 	// var arrivalTime = $('#nextInfo').append(inputValNext);

// 	$("#tableId > tbody").append("<tr><td>" + inputValName + "</td><td>" + inputValDestination + "</td><td>" + inputValFrequency + "</td><td>" + inputValNext + "</td></tr>");

$("#submitInfo").on("click", function(){
	var trainName = $("#inputName").val().trim();
	var destination = $("#inputDestination").val().trim();
	var arrivalTime = $("#inputFirst").val().trim();
	var frequency = $("#inputFrequency").val().trim();

var firstTimeConverted = moment(arrivalTime, "hh:mm").subtract(1, "days");
      console.log(firstTimeConverted);

var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);

 var tRemainder = diffTime % frequency;
      console.log(tRemainder);

 var tMinutesTillTrain = frequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


var newData = {
    name: trainName,
    dest: destination,
    arri: arrivalTime,
    freq: frequency,
  };

  database.ref().push(newData);

  console.log(newData.name);
  console.log(newData.dest);
  console.log(newData.arri);
  console.log(newData.freq);
  console.log(nextTrain);

  alert("Train successfully added.");

  $("#inputName").val("");
  $("#inputDestination").val("");
  $("#inputFirst").val("");
  $("#inputFrequency").val("");

  $("#tableId > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrivalTime + "</td><td>" + moment(nextTrain).format("hh:mm")); + "</td></tr>";

 

return false;
});

