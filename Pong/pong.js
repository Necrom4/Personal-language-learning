let paddle_y1 = paddle_y2 = canvas.height / 2 - 100;
let paddle_speed_y1 = 0;
let paddle_speed_y2 = 0;
const ball_length = 30;
let ball_x = canvas.width / 2 - ball_length / 2;
let ball_y = canvas.height / 2 - ball_length / 2;
let ball_speed = 400;
let ball_angle = ((Math.random() < 0.5 ? 1 : -1) == true) ? (Math.PI - ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180)) : ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180);
let score = [0, 0];
let paddle_bounces = 0;
let last_frame;
let wait_frames = 0;
let speed_acc = 3;
let n = 0;
let ai_activated = false;
let mouse_posX;
let mouse_posY;

function bounceAngle(ball_angle, ball_x, ball_y, ball_length, paddle_y1, paddle_y2) {
	let paddle;
	paddle_bounces++;
	if (ball_angle > Math.PI / 2 && ball_angle < Math.PI + Math.PI / 2)
		paddle = paddle_y1;
	else if (ball_angle < Math.PI / 2 || ball_angle > Math.PI + Math.PI / 2)
		paddle = paddle_y2;
	let relative_position = (ball_y + ball_length / 2) - (paddle + 100);

	if (paddle == paddle_y1)
		return (2 * Math.PI - ((360 - relative_position * 45 / 100) * Math.PI / 180));
	else if (paddle == paddle_y2)
		return (2 * Math.PI - ((180 + relative_position * 45 / 100) * Math.PI / 180));
}

function updatePos(time_diff) {
	wait_frames--;
	frames++;
	aiMove();
	if (wait_frames == 1) {
		paddle_speed_y1 = 0;
		paddle_speed_y2 = 0;
		ball_x = canvas.width / 2 - ball_length / 2;
		ball_y = canvas.height / 2 - ball_length / 2;
		ball_speed = 400;
		ball_angle = ((Math.random() < 0.5 ? 1 : -1) == true) ? (Math.PI - ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180)) : ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180);
		paddle_bounces = 0;
		speed_acc = 3;
		frames = 0;
		aiMove();
	}

  paddle_y1 += paddle_speed_y1 * time_diff;
  paddle_y2 += paddle_speed_y2 * time_diff;
	if (paddle_y1 < 10 || paddle_y1 > 955)
		paddle_y1 -= paddle_speed_y1 * time_diff;
	if (paddle_y2 < 10 || paddle_y2 > 955)
		paddle_y2 -= paddle_speed_y2 * time_diff;

	ball_x += ball_speed * Math.cos(ball_angle) * time_diff;
	ball_y += ball_speed * Math.sin(ball_angle) * time_diff;
	if (ball_y < 0 || ball_y > canvas.height - ball_length)
		ball_angle = 2 * Math.PI - ball_angle;
	if ((ball_y >= paddle_y1 - 25 && ball_y <= paddle_y1 + 200 && ball_x <= 50 && ball_x >= 20 && ball_angle > Math.PI / 2 && ball_angle < Math.PI * 1.5) || (ball_y >= paddle_y2 - 25 && ball_y <= paddle_y2 + 200 && ball_x + ball_length >= 1130 && ball_x <= 1160 && (ball_angle < Math.PI / 2 || ball_angle > Math.PI * 1.5))) {
		ball_angle = bounceAngle(ball_angle, ball_x, ball_y, ball_length, paddle_y1, paddle_y2);
		if (Math.floor(Math.random() * speed_acc) == 1)
			ball_speed *= 1.1;
		if (ball_speed > 1500)
			speed_acc = 10;
		if (ball_speed > 2000)
			ball_speed = 2000;
		if (paddle_bounces == 1)
			ball_speed *= 2;
	}
	if (ball_x < -ball_length && wait_frames < 0) {
		score[1]++;
		wait_frames = 25;
	}
	else if (ball_x > canvas.width && wait_frames < 0) {
		score[0]++;
		wait_frames = 25;
	}
}

function mouseInsideButton(n) {
	if (n == 1)
		if (mouse_posX >= canvas.width / 2 - 100 && mouse_posX <= canvas.width / 2 + 200 && mouse_posY >= canvas.height / 2 && mouse_posY <= canvas.height / 2 + 100)
			return 1;
	if (n == 2)
		if (mouse_posX >= canvas.width / 2 - 100 && mouse_posX <= canvas.width / 2 + 200 && mouse_posY >= canvas.height / 2 + 120 && mouse_posY <= canvas.height / 2 + 220)
			return 2;
	return 0;
}

function menu() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "100px Arial";
  ctx.fillStyle = "rgb(100, 100, 100)";
	ctx.textAlign = "center";
	ctx.fillText("PONG", canvas.width / 2, canvas.height / 2 - 80);

	ctx.strokeStyle = "rgb(100, 100, 100)";
	if (mouseInsideButton(1) == 1)
		ctx.strokeStyle = "rgb(150, 150, 150)";
	ctx.lineWidth = 100;
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2);
	ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2);
	ctx.stroke();
	ctx.strokeStyle = "rgb(100, 100, 100)";
	if (mouseInsideButton(2) == 2)
		ctx.strokeStyle = "rgb(150, 150, 150)";
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2 + 120);
	ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 120);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "rgb(0, 0, 0)";
	ctx.lineWidth = 90;
	ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2);
	ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2);
	ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2 + 120);
	ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 120);
	ctx.stroke();

	ctx.font = "50px Arial";
	ctx.fillStyle = "rgb(100, 100, 100)";
	if (mouseInsideButton(1) == 1)
		ctx.fillStyle = "rgb(150, 150, 150)";
	ctx.fillText("1 Player", canvas.width / 2, canvas.height / 2 + 17);
	ctx.fillStyle = "rgb(100, 100, 100)";
	if (mouseInsideButton(2) == 2)
		ctx.fillStyle = "rgb(150, 150, 150)";
	ctx.fillText("2 Players", canvas.width / 2, canvas.height / 2 + 137);

	requestAnimationFrame(menu);
}

function aiMove() {
	if (!ai_activated || !(ball_angle > Math.PI / 2 && ball_angle < Math.PI * 1.5))
		return;
	let copy_ball_x = ball_x;
	let copy_ball_y = ball_y;
	let copy_ball_angle = ball_angle;
	for (let i = 1; ball_x > 50; i++) {
		if (ball_y < 0 || ball_y > canvas.height - ball_length)
			ball_angle = 2 * Math.PI - ball_angle;
		ball_x += Math.cos(ball_angle) * i;
		ball_y += Math.sin(ball_angle) * i;
	}
	if (ball_y + ball_length / 2 > paddle_y1 + 200)
		paddle_speed_y1 = 1000;
	else if (ball_y + ball_length / 2 < paddle_y1)
		paddle_speed_y1 = -1000;
	else
		paddle_speed_y1 = 0;
	ball_x = copy_ball_x;
	ball_y = copy_ball_y;
	ball_angle = copy_ball_angle;
}

function draw() {
	if (!n) {
		paddle_y2 += 2;
		paddle_y2--;
	}
	n++;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(70, 70, 70)";
	for (let i = 15; i < canvas.height - 30; i += 50) {
		ctx.fillRect(canvas.width / 2, i, 10, 30);
	}
	ctx.font = "100px Arial";
	ctx.textAlign = "center";
	ctx.fillText(score[0].toString(), canvas.width / 3, 100);
	ctx.fillText(score[1].toString(), canvas.width - canvas.width / 3, 100);
  ctx.fillStyle = "rgb(100, 100, 100)";
	ctx.font = "20px Courier New";
	ctx.textAlign = "left";
	ctx.fillText("Ball Speed: " + Math.floor(ball_speed), 20, 30);
	ctx.fillText("Paddle Bounces: " + paddle_bounces, 20, 50);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(20, paddle_y1, 30, 200);
  ctx.fillRect(1130, paddle_y2, 30, 200);
	ctx.beginPath();
	ctx.fillRect(ball_x, ball_y, ball_length, ball_length);
	ctx.fill();
}

function loop(current_frame) {
  const time_diff = (current_frame - last_frame) / 1000 || 0;
  last_frame = current_frame;

	// aiMove();
  updatePos(time_diff);
  draw();

  requestAnimationFrame(loop);
}

document.addEventListener("click", (event) => {
	if (event.button == 0) {
		if (mouseInsideButton(1)) {
			ai_activated = true;
			requestAnimationFrame(loop);
		}
		else if (mouseInsideButton(2))
			requestAnimationFrame(loop);
	}
});

document.onmousemove = (event) => {
	const {
		clientX,
		clientY
	} = event
	mouse_posX = clientX;
	mouse_posY = clientY;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "w" && !ai_activated)
    paddle_speed_y1 = -1000;
  else if (event.key === "s" && !ai_activated)
    paddle_speed_y1 = 1000;
  else if (event.key === "ArrowUp")
    paddle_speed_y2 = -1000;
  else if (event.key === "ArrowDown")
    paddle_speed_y2 = 1000;
});

document.addEventListener("keyup", (event) => {
	if (event.key === "w" || event.key === "s") {
		if (!ai_activated)
			paddle_speed_y1 = 0;
	}
  else if (event.key === "ArrowUp" || event.key === "ArrowDown")
    paddle_speed_y2 = 0;
});

menu();
