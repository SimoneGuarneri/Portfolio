const bigBall = document.querySelector(".cursor__ball--big");
const smallBall = document.querySelector(".cursor__ball--small");

// Move the cursor
export const onMouseMove = (e) => {
  window.TweenMax.to(bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  window.TweenMax.to(smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
}

// Hover an element
export const onMouseHover = () => {
  window.TweenMax.to(bigBall, 0.3, {
    scale: 3
  });
}
export const onMouseHoverOut = () => {
  window.TweenMax.to(bigBall, 0.3, {
    scale: 1
  });
}
