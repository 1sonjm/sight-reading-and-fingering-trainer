postMessage('worker says hi');

let interval
let timeoutId


self.onmessage = (e) => {
  console.log(e)
  // interval = e.data.interval
  // if (e.data === 'start') {
	// 	timeoutId = setTimeout(function run() {
  //     console.log();
	// 		setTimeout(run, interval);
	// 	}, interval)
	// }
	// else if (e.data === 'stop') {
	// 	clearInterval(timeoutId);
	// }
};