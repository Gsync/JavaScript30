let timeNodes = document.querySelectorAll('[data-time]');
timeNodes = [...timeNodes]; //covert to an array from nodelist
// also workds: timeNodes = Array.from(timeNodes);

const timeArray = timeNodes.map(d=>d.dataset.time);

const seconds = timeArray.map(d => {
    const [min, sec] = d.split(':').map(parseFloat);//parseFloat converts str to num
    return min*60 + sec;
}).reduce((a,b) => a+b);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft/3600);

secondsLeft = secondsLeft % 3600; //get the remainder of the seconds

const mins = Math.floor(secondsLeft/60);

secondsLeft = secondsLeft % 60;

console.log("Total time: ", hours, mins, secondsLeft);