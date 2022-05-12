const timer1 = () => {
  setTimeout(() => {
    console.log('5. Timer 1/Macrotask')
  }, 1)
}

const timer10 = () => {
  setTimeout(() => {
    console.log('7. Timer 10/Macrotask')
  }, 10)
}

const prom = Promise.resolve();

console.log('1. Start');
requestAnimationFrame(() => console.log('6. reqAnimFrame'));
queueMicrotask(() => {console.log('3. queue/Microtask')});
timer1();
timer10();
prom.then(() => {console.log('4.1. Promise/Microtask')}).then(() => {console.log('4.2. Promise/Microtask')});
console.log('2. End');
