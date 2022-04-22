document.addEventListener("mousemove", (e) => {
  const sqrs = document.querySelectorAll(".item");

  const mouseX = e.pageX;
  const mouseY = e.pageY;

  sqrs.forEach((sqr) => {
    const sqrX = sqr.offsetLeft;
    const sqrY = sqr.offsetTop;

    const diffX = mouseX - sqrX;
    const diffY = mouseY - sqrY;
    const angle = (Math.atan2(diffY, diffX) * 180) / Math.PI;

    sqr.style.transform = `rotate(${angle}deg)`;
  });
});
