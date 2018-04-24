

document.addEventListener('DOMContentLoaded', function() {
  let time = 0;
  let id;
  let isRunning = false;
  const interval = 10;
  let startTime;
  let diff;

  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const seconds = document.getElementById('seconds');
  const milliseconds = document.getElementById('milliseconds');

  start.addEventListener('click', function(e) {
    if (isRunning) {
      return;
    }

    if (!startTime) {
      startTime = new Date().getTime();
    }
    isRunning = true;

    id = setInterval(function() {
      diff = new Date().getTime() - startTime;
      let secondsNum = Math.floor(diff / 1000);
      let millisecondsNum = Math.floor(diff % 1000 / 10);
      seconds.innerHTML = secondsNum;
      milliseconds.innerHTML = millisecondsNum.toString().padStart(2, '0');
    }, interval);
  });

  stop.addEventListener('click', function(e) {
    isRunning = false;
    diff = new Date().getTime() - startTime;
    clearInterval(id);
  });

  reset.addEventListener('click', function(e) {
    startTime = null;
    seconds.innerHTML = 0;
    milliseconds.innerHTML = '00';
  });
});

