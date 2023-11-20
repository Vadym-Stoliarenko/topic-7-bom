window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    const outputElement = document.getElementById("output");
  
    outputElement.innerHTML = `width: ${windowWidth}px, height: ${windowHeight}px`;
  });
  