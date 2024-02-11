console.log("CANVAS!");

window.onload = () => {
  const canvas = document.getElementById("canvas-1");
  const context = canvas.getContext("2d");

  console.log(context);

  document.querySelector("#start").onclick = function () {
    context.fillRect(100, 100, 50, 50);
  };

  context.lineWidth = 4;

  // context.strokeStyle = "red";
  // context.strokeRect(50, 200, 50, 150);

  // context.fillStyle = "green";
  // context.fillRect(450, 200, 50, 150);

  // context.fillStyle = "rgba(255, 0, 0, 0.5)";
  // context.beginPath();
  // context.arc(200, 200, 120, 0, Math.PI, true);
  // context.fill();

  // context.strokeStyle = "black";
  // context.beginPath();
  // context.arc(450, 200, 120, 0, Math.PI, false);
  // context.stroke();

  // context.font = "44px Courier New";
  // context.textAlign = "center"; //alignment to the starting point
  // context.fillStyle = "black";

  // //arguments: text, x starting point, y starting point
  // context.fillText("Super sexy text", 200, 250);

  var y = 200;
  var x = 10;
  var size = 40;

  for (let j = 1; j <= 10; j++) {
    let red = 255 - 20 * j;
    let green = 20 * j;
    let blue = 10;
    let style = `rgb(${red},${green},${blue})`;

    context.fillStyle = style;
    context.fillRect(x, y, size, size);
    x += size * 1.5;
  }
};
