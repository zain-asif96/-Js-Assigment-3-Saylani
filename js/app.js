function getNumber(num) {
  var result = document.getElementById("result");
  result.value += num;
}

function clearInputField() {
  var result = document.getElementById("result");
  result.value = "";
}

function calcResult() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
}
