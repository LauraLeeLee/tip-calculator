
function billTotal() {
  let total = document.getElementsByClassName("bill_amt")[0].value;
  console.log(total);

  let tip = document.getElementsByClassName("tip-quality")[0].value*0.01;
  console.log(tip);

  let group = document.getElementsByClassName("group-number")[0].value;
  console.log(group);
  let tipCalc = "";

  if (total > 1 || group > 0) {

  tipCalc = total*tip/group;
    console.log(tipCalc);
  } else {
    alert("Please enter all values!");
  }

  if(tipCalc) {
  document.getElementsByClassName("tip-calculation")[0].innerHTML = "$" + tipCalc.toFixed(2);
} else {
  console.log("no data entered for tip");
}
  document.getElementsByClassName("total-box")[0].style.display = "block";
  console.log("visible");
}

document.getElementById("calculate-button").addEventListener('click', billTotal);

function resetForm() {
    document.getElementById("tip-form").reset();
    document.getElementsByClassName("tip-calculation")[0].innerHTML = "$"+ 0;
    document.getElementsByClassName("total-box")[0].style.display = "none";
}

document.getElementById("reset-button").addEventListener("click", resetForm);
