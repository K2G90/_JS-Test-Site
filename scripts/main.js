const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/black-panther-wakanda-king-2020-0c-2880x1800.jpeg") {
      myImage.setAttribute("src", "images/black-panther-4k-minimalism-2020-gd-2880x1800.jpeg");
    } else {
      myImage.setAttribute("src", "images/black-panther-wakanda-king-2020-0c-2880x1800.jpeg");
    }
  };