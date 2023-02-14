const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/black-panther-wakanda-king-2020-0c-2880x1800.jpeg") {
      myImage.setAttribute("src", "images/black-panther-4k-minimalism-2020-gd-2880x1800.jpeg");
    } else {
      myImage.setAttribute("src", "images/black-panther-wakanda-king-2020-0c-2880x1800.jpeg");
    }
  };

  let myButton = document.querySelector("button");
  let myHeader = document.querySelector("h1");
  
  function setUserName( ) {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeader.textContent = `Hello my name is, ${myName}`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeader.textContent = `Hello my name is, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }