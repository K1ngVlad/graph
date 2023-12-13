const canvas = document.querySelector('canvas');

const width = canvas.width;
const height = canvas.height;
const centerX = width / 2;
const centerY = height / 2;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'skyblue';

const module = width;
const n = 10000;

const fillFrame = () => {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < n; i++) {
    ctx.fillRect(
      module / (Math.random() * 10) - module / 10,
      module / (Math.random() * 10) - module / 10,
      1,
      1
    );
  }
  requestAnimationFrame(fillFrame);
};

requestAnimationFrame(fillFrame);
