// I'm making a stopwatch that'll live in the console
// It'll have start, stop, and reset functions as well as a duration value.

const sw = new Stopwatch();

console.log('Stopwatch: ', sw);

// Constructor function
function Stopwatch() {
  let duration = 0;
  let running = false;

  function incrementDuration() {
    if (running == true) {
      setTimeout(() => {
        duration = duration + 0.01;
        console.log('Duration: ', duration);
        incrementDuration();
      }, 10);
    }
  }

  this.start = function () {
    if (running) throw new Error('Stopwatch is running!');

    running = true;
    incrementDuration();
  };

  this.stop = function () {
    if (!running) throw new Error('Stopwatch is already stopped!');

    running = false;
  };

  this.reset = function () {
    if (!running && duration == 0)
      throw new Error('Stopwatch has already been reset!');

    running == false;
    duration = 0;
  };

  // Doing it this way lets me control whether or not user can get and/or set the duration variable.
  // In this case, I'm only providing a 'get' function.

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}
