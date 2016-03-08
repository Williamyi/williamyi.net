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
