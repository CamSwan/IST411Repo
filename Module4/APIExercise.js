async function getPar() {
  //Base API 
  var apiText = "https://baconipsum.com/api/"

  //Appends the number of paragraphs to the base api
  var newText = document.getElementById("par").value;
  apiText = apiText + "?type=all-meat&paras=" + newText;
  alert(apiText);

  //Waits to call web service and recieves the text from the api call
  var response = await fetch(apiText);

  //Printing the filler text
  document.getElementById("raw").innerHTML = "";
  document.getElementById("formatted").innerHTML = "";

  //Formats response as a Json
  var jasonData = await response.json();

  //Raw converts the value to a Json string
  document.getElementById("raw").innerHTML = JSON.stringify(jasonData);
  //Formatted loops through the Json adding Paragraphs for the sections
  for (var para in jasonData){
    document.getElementById("formatted").innerHTML += "<p>" + jasonData[para] + "</p>";
  }

  return true;
}