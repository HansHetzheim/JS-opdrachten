var imgs = [ ...document.querySelectorAll(".img") ];

imgs.forEach((img, i) => {
  img.addEventListener('mouseover', function () {
    this.src = "images/image" + (i + 1) + "_2.jpg";
    });
  img.addEventListener('mouseout', function () {
    this.src = "images/image" + (i + 1) + ".jpg";
  });
});
