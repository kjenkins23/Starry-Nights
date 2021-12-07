function setup() {
  createCanvas(400, 400);



  
  var xPos = 7;
var yPos = 9;

var xPos1= 379;
var yPos2= 60;



draw = function() {
    background(29, 40, 115);
    fill (173, 164, 164);
    rect(69, 193, 80, 209); // building 1
    rect(166,246, 71, 154); // building 2
    fill (255, 255, 255);
    rect(77, 203,27,45); // window 1 (building 1)
    rect(113, 203,27,45);//window 2
    
    rect(77, 261,27,45); // window 3
    rect(112, 261,27,45); // window 4
    fill (0, 0, 0);
    rect(97, 355,26,45); //door
    
    fill(242, 255, 0);
    ellipse(351,37, 89, 61);
    
    fill(0, 0, 0);
    rect(186, 354,27,45);
    fill(250, 250, 250);
    rect(171, 251,27,45);
    rect(206, 251,27,45);
 xPos+= 10;
yPos+= 10;
    
    fill(255, 242, 0);
    ellipse(xPos+ 62, yPos +98, 10, 10);// star 1

ellipse(xPos, yPos, 15, 15); // star 2
ellipse(xPos1, yPos2, 13, 13);
triangle(xPos, yPos, 15, 15, 14,1);

 xPos1-=12;
 yPos2+= 2;

//star 3
};

}