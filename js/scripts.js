function Patient(){
  var name;
  var dob;
  var email;
  var phone;
  var documents;
}

function Document(){
  var id;
  var name;
  var date;
}

function extract(){
  //Put the pasted html into the DOM
  var rawData = document.getElementById("html-entry").value;
  $("#pasted").html(rawData);

  //Create a new Patient record and add personal info
  var newPatient = new Patient();
  newPatient.name = $("a[target='_blank']:eq(0)").text();
  newPatient.dob = $("h4").text();
  newPatient.email = $("a[target='_blank']:eq(1)").text();
  newPatient.phone = $("small").html().slice(0, $("small").html().indexOf("<")-1);
  newPatient.documents = [];

  //Create Documents and add to newPatient
  $("tbody:eq(6)").children("tr").each(function(i) {
    var newDocument = new Document();
    newDocument.id = $(this).find("option:first-of-type").attr("value").slice(0, $(this).find("option:first-of-type").attr("value").indexOf(","));
    newDocument.name = $(this).children("td:eq(2)").text();
    newDocument.date = $(this).children("td:eq(0)").text();
    newPatient.documents.push(newDocument);
  });

  //Create html string to display info
  var pulledData = "Name: " + newPatient.name + "<br>";
  pulledData += "DOB: " + newPatient.dob + "<br>";
  pulledData += "Email: " + newPatient.email + "<br>";
  pulledData += "Phone: " + newPatient.phone + "<br>";
  pulledData += "Labs & Documents <br>";

  //Loop through the labs and documents and add them to the html
  newPatient.documents.forEach(function (document){
    pulledData += "ID: " + document.id + " <br>";
    pulledData += "Date: " + document.date + " <br>";
    pulledData += "Name: " + document.name + " <br>";
  });

  //Display the compiled string of info
  $("#data").append(pulledData);
}
