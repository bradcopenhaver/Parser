function extract(){
  //Put the pasted html into the DOM
  var rawData = document.getElementById("html-entry").value;
  $("#pasted").html(rawData);

  //Get the patient info and add to a string of html
  var pulledData = "Name: " + $("a[target='_blank']:eq(0)").text() + "<br>";
  pulledData += "DOB: " + $("h4").text() + "<br>";
  pulledData += "Email: " + $("a[target='_blank']:eq(1)").text() + "<br>";
  pulledData += "Phone: " + $("small").html().slice(0, $("small").html().indexOf(">")+1);
  pulledData += "Labs & Documents <br>";

  //Loop through the labs and documents and add them to the html
  $("tbody:eq(6)").children("tr").each(function(i) {
    pulledData += "ID: " + $(this).find("option:first-of-type").attr("value").slice(0, $(this).find("option:first-of-type").attr("value").indexOf(",") ) + " <br>";
    pulledData += "Date: " + $(this).children("td:eq(0)").text() + " <br>";
    pulledData += "Name: " + $(this).children("td:eq(2)").text() + " <br>";
  });

  //Display the compiled string of info
  $("#data").append(pulledData);
}
