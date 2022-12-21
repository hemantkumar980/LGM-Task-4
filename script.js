// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function clear last digit
function del() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}



// This function evaluates the expression and return result
function calculate() {
  try{
    document.getElementById("result").value = eval(document.getElementById("result").value);
  } catch (err) {
    alert("Invalid", err);
  }
}
