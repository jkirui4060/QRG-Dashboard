const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  letters = "01";
  fontSize = 16;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}

// initial values
let letters, fontSize, columns, drops;
setupCanvas();

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  const contentWidth = 900; 
  const gutter = (canvas.width - contentWidth) / 2;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    // draw ONLY left + right sides
    if (x < gutter || x > gutter + contentWidth) {
      ctx.fillText(text, x, y);
    }

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

// handle resize properly
window.addEventListener("resize", setupCanvas);
