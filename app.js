
console.log("Calculatrice Web");

const Calculatrice = (function Calculatrice(){
  let firstNumber;
  let secondNumber;
  let select;

  function calcul(){
    firstNumber = document.getElementById("firstnumber");
    secondNumber = document.getElementById("secondnumber");
    select = document.getElementById("select");

    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);

    if (isNaN(a) || isNaN(b)){
      alert("Un Error")
    }

    else{
      firstNumber.value = "";
      secondNumber.value = "";

      if (select.value == "plus") {
      var resultPlus = a + b;
      console.log(resultPlus);
      var output = document.getElementById("output").value = resultPlus;
      }

      if (select.value == "minus") {
        var resultMinus = a - b;
        console.log(resultMinus);
        var output = document.getElementById("output").value = resultMinus;
      }

      if (select.value == "multiplication") {
        var resultMultiplication = a * b;
        console.log(resultMultiplication);
        var output = document.getElementById("output").value = resultMultiplication;
      }

      if (select.value == "divided") {
        var resultDivided = a / b;
        console.log(resultDivided);
        var output = document.getElementById("output").value = resultDivided;
      }

      if (select.value == "percent") {
        var resultPercent = a % b;
        console.log(resultPercent);
        var output = document.getElementById("output").value = resultPercent;
      }
    }
  }

  window.onload = function init(){
    document.getElementById("head").innerHTML = "Calculatrice Web";
    calcul();
    /*firstNumber = document.getElementById("firstnumber");
    secondNumber = document.getElementById("secondnumber");
    select = document.getElementById("select");
      console.log(select.value);*/
    var btn = document.getElementById("btn");
    btn.onclick = calcul;
    /*console.log(btn);*/

  };

})();
