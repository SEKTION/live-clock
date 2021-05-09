var sHand = document.querySelector("#second-hand");
var mHand = document.querySelector("#minute-hand");
var hHand = document.querySelector("#hour-hand");
var dTime = document.querySelector(".time"); 

function rotate() {
  let time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();
  const secDegrees = (secs / 60) * 360 + 90;
  const minDegrees = (mins / 60) * 360 + 90;
  const hourDegrees = (hours / 12) * 360 + 90;
  sHand.style.transform = `rotate(${secDegrees}deg)`;
  mHand.style.transform = `rotate(${minDegrees}deg)`;
  hHand.style.transform = `rotate(${hourDegrees}deg)`;
  dTime.innerHTML = `${hours > 12 ? hours - 12 : hours}:${mins > 9 ? mins: "0"+mins}:${secs > 9 ? secs : "0"+secs} ${hours >= 12 ? "PM" : "AM"}`;
}

rotate();
setInterval(rotate, 1000);
