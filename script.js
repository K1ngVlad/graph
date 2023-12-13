const canvas = document.querySelector('canvas');

const width = canvas.width;
const height = canvas.height;
const centerX = width / 2;
const centerY = height / 2;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';

const module = 300;
const t = 0.01;
const circles = 8;
const n = Math.ceil((2 * Math.PI) / t) * circles;
let mult = 1;

const funcX = (f) => Math.cos(f) * module;
const funcY = (f) => Math.sin(f) * module;

const fillFrame = () => {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < n; i++) {
    const x = funcX(i * t);
    const y = funcY(i * t * mult);
    ctx.fillRect(centerX + x, centerY + y, 1, 1);
  }
  mult += 10e-5;
  requestAnimationFrame(fillFrame);
};

requestAnimationFrame(fillFrame);
