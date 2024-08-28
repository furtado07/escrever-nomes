function setup() {
    createCanvas(1000, 1000);
   background("BLACK");
  }
  
  function draw() {
    
   stroke("blue");
   fill("draw");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35,);
    }
  }
    