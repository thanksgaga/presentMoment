const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `지금 시간은\n${hours}시 ${minutes}분 ${seconds}초 입니다.\n`;
}

getClock();
setInterval(getClock, 1000); //function, how much ms wait for next execute

//setTimeout(getClock, 1000); // one time run timeout