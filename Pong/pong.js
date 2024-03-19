let player_y1 = 500;
let player_y2 = 500;
let player_speed_y1 = 0;
let player_speed_y2 = 0;
let ball_x = canvas.width / 2;
let ball_y = canvas.height / 2;
let ball_length = 30;
let ball_speed_x = 400;
if (Math.floor(Math.random() * 2))
	ball_speed_x *= -1;
let ball_speed_y = Math.floor(Math.random() * (400 - -400) - 400);
let first_hit = 0;
let last_frame;
let wait_frames = 0;

function updatePos(time_diff) {
	console.log("Init" + ball_speed_y);
	wait_frames--;
	if (wait_frames == 1) {
		player_speed_y1 = 0;
		player_speed_y2 = 0;
		ball_x = canvas.width / 2;
		ball_y = canvas.height / 2;
		ball_speed_x = -400;
		if (Math.floor(Math.random() * 2))
			ball_speed_x *= -1;
		ball_speed_y = Math.floor(Math.random() * (400 - -400) - 400);
		first_hit = 0;
	}

  player_y1 += player_speed_y1 * time_diff;
  player_y2 += player_speed_y2 * time_diff;
	if (player_y1 < 10 || player_y1 > 955)
		player_y1 -= player_speed_y1 * time_diff;
	if (player_y2 < 10 || player_y2 > 955)
		player_y2 -= player_speed_y2 * time_diff;

	ball_x += ball_speed_x * time_diff;
	ball_y += ball_speed_y * time_diff;
	if (ball_y < 0 || ball_y > canvas.height - ball_length)
		ball_speed_y *= -1;
	// if ((ball_x  + ball_length / 2 >= 20 && ball_x + ball_length / 2 <= 50) && (ball_y + ball_length >= player_y1 && ball_y + ball_length <= player_y1 + 20)) {
	// 	ball_speed_x *= -1;
	// }
	if ((ball_y >= player_y1 - 25 && ball_y <= player_y1 + 200 && (ball_x >= 30 && ball_x <= 50) && ball_speed_x < 0) || (ball_y >= player_y2 - 25 && ball_y <= player_y2 + 200 && (ball_x + ball_length >= 1130 && ball_x + ball_length <= 1150) && ball_speed_x > 0)) {
		ball_speed_x *= -1;
		console.log("Before" + ball_speed_y);
		ball_speed_y += Math.floor(Math.random() * (300 + 300) - 300);
		console.log("After" + ball_speed_y);
		// console.log((Math.random() * (100 + 100) - 100) / 100);
		if (!first_hit) {
			first_hit = 1;
			ball_speed_x *= 2;
		}
	}
	if (ball_x < -ball_length && ball_x > -200 || ball_x > canvas.width && ball_x < canvas.width + 200)
		wait_frames = 25;
}

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(20, player_y1, 30, 200);
  ctx.fillRect(1130, player_y2, 30, 200);
	ctx.beginPath();
	ctx.fillRect(ball_x, ball_y, ball_length, ball_length);
	ctx.fill();
}

function loop(current_frame) {
  const time_diff = (current_frame - last_frame) / 1000 || 0;
  last_frame = current_frame;

  updatePos(time_diff);
  draw();

  requestAnimationFrame(loop);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "w")
    player_speed_y1 = -1000;
  else if (event.key === "s")
    player_speed_y1 = 1000;
  else if (event.key === "ArrowUp")
    player_speed_y2 = -1000;
  else if (event.key === "ArrowDown")
    player_speed_y2 = 1000;
});

document.addEventListener("keyup", (event) => {
  if (event.key === "w" || event.key === "s") {
    player_speed_y1 = 0;
  } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    player_speed_y2 = 0;
  }
});

requestAnimationFrame(loop);
