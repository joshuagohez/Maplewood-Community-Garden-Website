let galleryImages = document.querySelectorAll(".gallery-img");

if(galleryImages) {
  galleryImages.forEach(function(image, index) {
    image.onclick = function() {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgURL = getElementCss.getPropertyValue("background-image");
      let getImgURLPosition = getFullImgURL.split("/images/");
      let NewImgURL = getImgURLPosition[1].replace('")', '');

      let getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg)
      newImg.setAttribute("src", "images/" + NewImgURL);
    }
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
}
