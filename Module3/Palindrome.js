function checkWord() {
  var newWord = document.forms["wordForm"]["word"].value;
  var newNum = document.forms["wordForm"]["method"].value;

  //Look for new word
  if (newWord == "") {
    alert("Please enter a word.");
    return false;
  }

  //Look for new method
  else if ((newNum != 1) && (newNum != 2)) {
    alert ("Please enter 1 or 2 to choose a method.");
    document.forms["wordForm"]["method"].value = "";
    return false;
  }

  //Selecting a method
  else {

    //Method1
    if (newNum==1){
      var str = document.getElementById("str").value;
      var revStr = str.split('').reverse().join('');
      if (str == revStr) {
        var tableRef = document.getElementById("Method1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ":true";
        document.forms["wordForm"]["method"].value = "";
        return true;
      }
      else {
        var tableRef = document.getElementById("Method1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ":false";
        document.forms["wordForm"]["method"].value = "";
        return true;
      }
    }

    //Method2
    else {
        var str = document.getElementById("str").value;
        var newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");

        for(var i=0; i < (newStr.length)/2; i++){
          if (newStr[i] == newStr[newStr.length-i-1]){
            var tableRef = document.getElementById("Method2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ":true";
            document.forms["wordForm"]["method"].value = "";
            return true;
          }
          else {
            var tableRef = document.getElementById("Method2");
          (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ":false";
          document.forms["wordForm"]["method"].value = "";
          return true;
          }//else
        }
    }
  }//select method
}//function

function clearMethod1(){
  var tableRef = document.getElementById("Method1");
  tableRef.innerHTML = " ";
}

function clearMethod2(){
  var tableRef = document.getElementById("Method2");
  tableRef.innerHTML = " ";
}