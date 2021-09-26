
drawing = [];
function setup() {
    createCanvas(windowWidth -95 , windowHeight - 100);
    background(0);
    let a = windowWidth - 80;
    let b = windowHeight - 50;

    button = createButton('submit');
    button.position(a,b);
    button.mousePressed(download);


  }
  
  function draw() {
    stroke(255);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);

    drawing.push(['{ x: ',mouseX,' y: ',mouseY,' },']);

    }
  }

function download(){
    // alert("YOLO");
    download_csv_file(drawing);
}







// // coordinatesX = [];
// // coordinatesY = [];
// let coordinates = [];
// // drawing = [];
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(102);

//     button = createButton('submit');
//     button.position(800, 65);
//     button.mousePressed(yolo);

//   }
  
//   function draw() {
//     stroke(255);
//     if (mouseIsPressed === true) {
//       line(mouseX, mouseY, pmouseX, pmouseY);
//     //   coordinatesX.push(mouseX);
//     //   coordinatesY.push(mouseY);    
//     coordinates.push([mouseX,mouseY]);

//     }
//   }

// // function yolo(){
// //     // alert("YOLO");
// //     drawing = coordinates;
// // }

// function yolo(){
//     // alert("YOLO");
//     download_csv_file(drawing);
// }

