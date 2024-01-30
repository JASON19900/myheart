const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart() {
    // 爱心的粒子绘制逻辑
    // 这可能需要一些数学计算来生成粒子的位置，使其形成爱心的形状
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeart();
}

animate();
