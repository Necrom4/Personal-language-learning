let player_y1 = canvas.height / 2 - 100;
let player_y2 = canvas.height / 2 - 100;
let player_speed_y1 = 0;
let player_speed_y2 = 0;
let ball_x = canvas.width / 2;
let ball_y = canvas.height / 2;
let ball_length = 30;
let ball_speed = 400;
let ball_angle = ((Math.random() < 0.5 ? 1 : -1) == true) ? (Math.PI - ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180)) : ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180);
var score = [0, 0];
let first_hit = 0;
let last_frame;
let wait_frames = 0;

function bounceAngle(ball_angle, ball_x, ball_y, ball_length, player_y1, player_y2) {
	let player;
	if (ball_angle > Math.PI / 2 && ball_angle < Math.PI + Math.PI / 2)
		player = player_y1;
	else if (ball_angle < Math.PI / 2 || ball_angle > Math.PI + Math.PI / 2)
		player = player_y2;
	let relative_position = (ball_y + ball_length / 2) - (player + 100);

	if (player == player_y1)
		return (2 * Math.PI - ((360 - relative_position * 65 / 100) * Math.PI / 180));
	else if (player == player_y2)
		return (2 * Math.PI - ((180 + relative_position * 65 / 100) * Math.PI / 180));
}

function updatePos(time_diff) {
	wait_frames--
	if (wait_frames == 1) {
		player_speed_y1 = 0;
		player_speed_y2 = 0;
		ball_x = canvas.width / 2;
		ball_y = canvas.height / 2;
		ball_speed = 400;
		ball_angle = ((Math.random() < 0.5 ? 1 : -1) == true) ? (Math.PI - ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180)) : ((Math.random() * (225 * Math.PI / 180 - 135 * Math.PI / 180)) + 135 * Math.PI / 180);
		first_hit = 0;
	}

  player_y1 += player_speed_y1 * time_diff;
  player_y2 += player_speed_y2 * time_diff;
	if (player_y1 < 10 || player_y1 > 955)
		player_y1 -= player_speed_y1 * time_diff;
	if (player_y2 < 10 || player_y2 > 955)
		player_y2 -= player_speed_y2 * time_diff;

	ball_x += ball_speed * Math.cos(ball_angle) * time_diff;
	ball_y += ball_speed * Math.sin(ball_angle) * time_diff;
	if (ball_y < 0 || ball_y > canvas.height - ball_length)
		ball_angle = 2 * Math.PI - ball_angle;
	if ((ball_y >= player_y1 - 25 && ball_y <= player_y1 + 200 && ball_x <= 50 && ball_angle > Math.PI / 2 && ball_angle < Math.PI * 1.5) || (ball_y >= player_y2 - 25 && ball_y <= player_y2 + 200 && ball_x + ball_length>= 1130 && (ball_angle < Math.PI / 2 || ball_angle > Math.PI * 1.5))) {
		// ball_angle = Math.PI - ball_angle;
		ball_angle = bounceAngle(ball_angle, ball_x, ball_y, ball_length, player_y1, player_y2);
		if (!first_hit) {
			first_hit = 1;
			ball_speed *= 2;
		}
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

function draw() {
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
  ctx.fillStyle = "rgb(255, 255, 255)";
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
