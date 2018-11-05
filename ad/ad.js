const container = document.getElementById("container");
const displayX = document.body.clientWidth;
const displayY = document.body.clientHeight;

const track = (event, parameters) => console.log(parameters);

container.addEventListener("touchstart", event => track('click', { x: event.touches[0].clientX/displayX*100, y: event.touches[0].clientY/displayY*100 }));