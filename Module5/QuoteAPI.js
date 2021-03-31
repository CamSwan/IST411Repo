async function getQuote() {
  var apiText = "https://api.quotable.io/random"

  //Select a Length
  var getLenght = document.getElementById("length").value;
    if (getLenght==1) {
      var apiText = apiText + "?maxLength=50";
    }
    else if (getLenght==2) {
      var apiText = apiText + "?minLength=50&maxLength=100";
    }
    else {
      var apiText = apiText + "?minLength=100";
    }

  //Select a Topic
  var getLenght = document.getElementById("topic").value;
    if (getLenght==1) {
      var apiText = apiText + "&tags=friendship";
    }
    else if (getLenght==2) {
      var apiText = apiText + "&tags=wisdom";
    }
    else {
      var apiText = apiText + "&tags=technology";
    }
  
  document.getElementById("spinner").style.visibility="visible";
  
  alert(apiText);

  //clears text
  document.getElementById("quote").innerHTML = "";
  document.getElementById("credits").innerHTML = "";

  const response = await fetch(apiText)
  const data = await response.json()

  document.getElementById("spinner").style.visibility="hidden";

  //adds text
  document.getElementById("quote").innerHTML += "<p>" + data.content + "</p>";
  document.getElementById("credits").innerHTML += "<p>" + data.author + "</p>";
  console.log(`${data.content} —${data.author}`)

}

