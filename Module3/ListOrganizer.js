function AddTask() {
  var newTask = document.forms["listForm"]["task"].value;
  var newNumber = document.forms["listForm"]["list"].value;
  //Check task 
  if (newTask == "") {
    alert("Please enter a task.");
    return false;
  }
  //Check number
  else if ((newNumber != 1) && (newNumber != 2)) {
    alert ("Please enter 1 or 2 to choose a list.");
    document.forms["listForm"]["list"].value = "";
    return false;
  }
  //Add Task to list
  else{
    //Send to List 1
    if (newNumber==1){
      var tableRef = document.getElementById("List1");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = newTask;
    }
    //Send to List 2
    else {
      var tableRef = document.getElementById("List2");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = newTask;
    }
    document.forms["listForm"]["task"].value = "";
    document.forms["listForm"]["list"].value = "";
    return true;
  }
}

function ClearList1() {
  var tableRef = document.getElementById("List1");
  tableRef.innerHTML = " ";
}

function ClearList2() {
  var tableRef = document.getElementById("List2");
  tableRef.innerHTML = " ";
}