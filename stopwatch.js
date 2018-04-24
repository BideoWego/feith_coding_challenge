

document.addEventListener('DOMContentLoaded', function() {
  let time = 0;
  let id;
  let isRunning = false;
  const interval = 10;

  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const seconds = document.getElementById('seconds');
  const milliseconds = document.getElementById('milliseconds');

  start.addEventListener('click', function(e) {
    if (isRunning) {
      return;
    }
    isRunning = true;

    id = setInterval(function() {
      time += interval;
      let secondsNum = Math.floor(time / 1000);
      let millisecondsNum = time % 1000 / 10;
      seconds.innerHTML = secondsNum;
      milliseconds.innerHTML = millisecondsNum.toString().padStart(2, '0');
    }, interval);
  });

  stop.addEventListener('click', function(e) {
    isRunning = false;
    clearInterval(id);
  });

  reset.addEventListener('click', function(e) {
    time = 0;
    seconds.innerHTML = 0;
    milliseconds.innerHTML = '00';
  });
});

