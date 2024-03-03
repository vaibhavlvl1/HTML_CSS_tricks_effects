const container = document.querySelector(".container");

window.onmousedown = (e) => {
  container.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
  if (container.dataset.mouseDownAt === "0") return;

  let mouseDelta = parseFloat(container.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(container.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  container.dataset.percen = nextPercentage;

  console.log(nextPercentage);

  container.animate(
    {
      transform: `translate(${nextPercentage}%,-50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  const images = document.querySelectorAll("img");
  Array.from(images).forEach((img) => {
    img.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  });
};

window.onmouseup = () => {
  container.dataset.mouseDownAt = "0";
  container.dataset.prevPercentage = container.dataset.percen;
};
