var vReturnback = document.getElementById("returnback");

function validateFirstname(){
  var vFirstname = document.getElementById("firstname").value;
  if (vFirstname===null || vFirstname===""){
    vReturnback.textContent ="Firstname is REQUIRED";
    return false;
  } else
    return true;
}
function validateLastname(){
  var vLastname = document.getElementById("lastname").value;
  if (vLastname===null || vLastname===""){
    vReturnback.textContent ="Lastname is REQUIRED";
    return false;
  } else
    return true;
}
function validateEmail() {
  var vEmail = document.getElementById("email").value;
  var atpos = vEmail.indexOf("@");
  var dotpos = vEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= vEmail.length || vEmail === null || vEmail === "") {
    vFeedback.textContent = "Not a valid e-mail address";
    return false;
  } else
    return true;
}
function validateForm() {
  return validateFirstname() && validateLastname();
}









function SetDate() {
  var myDate = new Date();
  var d = myDate.toDateString();
  var h = myDate.getHours();
  var m = myDate.getMinutes();
  var s = myDate.getSeconds();
  var nd;
  if (h >= 12) {
    h -= 12;
    nd = "PM";
  } else {
    if (h == "0") h = "12";
    nd = "AM";
  }

  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  theDate = d + " @ " + h.toString() + ":" + m.toString() + ":" + s.toString() + nd;

  document.getElementById("date").textContent = theDate;
}

SetDate();
setInterval(SetDate, 1000);
