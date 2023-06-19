let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let foundBtn = document.getElementById("found");
let times = document.getElementById("times");

let hour = 0;
let minute = 0;
let second = 0;
let count = 1;
let check = 0;
let time = 0;
let found = false;

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

foundBtn.addEventListener("click", function () {
  console.log(`time taken: ${time * 10}`);
  times.innerHTML += " " + time * 10 + ",";
  found = false;
  time = 0;
  count = 1;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopWatch() {
  if (timer) {
    count++;
    if (found) {
      time++;
    }

    if (count == 100) {
      check = Math.random();
      if (check < 0.1) {
        second++;
        found = true;
      }
      second++;
      count = 0;
    }

    if (second >= 60) {
      minute++;
      second = second - 60;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}
