

document.addEventListener('DOMContentLoaded', function() {
  let time = 0;
  let id;
  let isRunning = false;
  const interval = 10;
  let startTime;
  let diff;
  let lastDiff = 0;

  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const seconds = document.getElementById('seconds');
  const milliseconds = document.getElementById('milliseconds');


  const startInterval = () => {
    id = setInterval(function() {
      diff = new Date().getTime() - startTime + lastDiff;
      let secondsNum = Math.floor(diff / 1000);
      let millisecondsNum = Math.floor(diff % 1000 / 10);
      seconds.innerHTML = secondsNum;
      milliseconds.innerHTML = millisecondsNum.toString().padStart(2, '0');
    }, interval);
  };

  const stopInterval = () => {
    lastDiff = new Date().getTime() - startTime + lastDiff;
    clearInterval(id);
  };


  start.addEventListener('click', function(e) {
    if (isRunning) {
      return;
    }

    startTime = new Date().getTime();
    isRunning = true;

    startInterval();
  });

  stop.addEventListener('click', function(e) {
    if (!isRunning) {
      return;
    }
    isRunning = false;
    stopInterval();
  });

  reset.addEventListener('click', function(e) {
    startTime = new Date().getTime();
    diff = 0;
    lastDiff = 0;
    seconds.innerHTML = 0;
    milliseconds.innerHTML = '00';
  });
});

