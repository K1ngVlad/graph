const canvas = document.querySelector('canvas');
const width = canvas.width;
const height = canvas.height;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';

const { abs, log, cos, sin } = Math;

const func = (x, index) => sin(4 * x) / sin(index * x);

const n = 2000;
const t = 0.01;
let index = 0;

const currentTime = new Date().getTime();

setInterval(() => {
  const time = new Date().getTime();
  const delta = time - currentTime;
  index += delta * 10e-8;
}, 10);

const drawFrame = () => {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  for (let i = -2000; i <= n; i++) {
    const x = i * t;
    const y = func(x, index);
    ctx.lineTo(centerX + x * 100, centerY + y * 100);
  }
  ctx.fill();
  requestAnimationFrame(drawFrame);
};

requestAnimationFrame(drawFrame);
