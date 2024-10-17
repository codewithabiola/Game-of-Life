// var matrix = [
//     [0, 0, 1, 0, 0, 3, 0],
//     [1, 0, 0, 2, 0, 0, 0],
//     [0, 1, 0, 0, 3, 0, 0],
//     [0, 0, 1, 0, 0, 5, 0],
//     [1, 1, 0, 0, 4, 0, 0],
//     [1, 1, 0, 2, 0, 0, 5],
//     [1, 1, 0, 0, 3, 0, 0],
//     [0, 0, 4, 0, 0, 3, 0]
// ];
    
var matrix = [];
size = 30;
size2 = 40;
var side = 50;
for (var y=0; y<size; y++){
     matrix.push([])
    for (var x=0; x<size;x++){
        var value = Math.floor(Math.random() *7)
        matrix[y].push(value)
    }
}
    var isSummer = false;
    var isWinter = false;

    var grassArr = [];

    var grassEat = [];

    var predator = [];

    var flower = [];

    var flowereater = [];

    var insect = [];

    function setup() {
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    var gr = new Grass(1,2,1);
    var emptyCells = gr.chooseCell(0);
    console.log(emptyCells);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x]==1){
                var gr = new Grass(x,y,1)
                grassArr.push(gr)
            }
            else if (matrix[y][x]==2){
                var gr = new GrassEater(x,y,1)
                grassEat.push(gr)
            }
            else if (matrix[y][x] == 3){
                var gr = new Predator(x,y,1)
                predator.push(gr)
            }
            else if(matrix[y][x]==4){
                var gr = new Flower(x,y,1)
                flower.push(gr)
            }
            else if(matrix[y][x]==5){
                var gr = new Flowereater(x,y,1)
                flowereater.push(gr)
            }
            else if(matrix[y][x]==6){
                var gr = new Insect(x,y,1)
                insect.push(gr)
            }
        }
    }    
    // console.log(grassEat)

    }

    function draw() {

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                if (isSummer){
                fill("orange");}
                else {fill ("green")}
                }
                 else if (matrix[y][x] == 0) {
                fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    }
                else if (matrix[y][x] == 3){
                    fill("blue");
                }
                else if (matrix[y][x] == 4){
                    fill("lightpink");
                }
                else if (matrix[y][x] == 5){
                    fill("red");
                }
                else if (matrix[y][x] == 6){
                    fill("black");
                }
        
        rect(x * side, y * side, side, side);
    
            }

        }

        for(var i in grassArr){
            grassArr[i].mul();
            }
        
        for(var i in grassEat){
            // grassEat[i].eat();
            grassEat[i].mul();
        }
        for(var i in predator){
            predator[i].mul();
        }
        for (var i in flower){
            flower[i].mul();
        }
        for (var i in flowereater){
            flowereater[i].mul();
        }
        for (var i in insect){
            insect[i].move();
        }

    }



    ///updates



var summerButton = document.getElementById("summer");
function clickAfterSummer(){
    isSummer=true;
    for (var i in grassArr){ 
        grass[i].color= "orange"}
}
summerButton.addEventListener('click',function(){
    clickAfterSummer()})

    
var springButton = document.getElementById("spring");
function clickAfterSpring(){
   //function triggersLimitChange(){changeLimit(2)}
    for (var i in grassEat){ 
        grassEat[i].changeLimit(2);
    }
    for (var i in predator){
        predator[i].changeLimit(2);
    } 
    for (var i in flowereater){
         flowereater[i].changeLimit(1);
    }
}
springButton.addEventListener('click',function(){
    clickAfterSpring()})


var autumnButton = document.getElementById("autumn");
function clickAfterAutumn(){
    for (var i in flower){ 
        flower[i].die();}
}
autumnButton.addEventListener('click',function(){
    clickAfterAutumn()})


var winterButton = document.getElementById("winter");
function clickAfterWinter(){
    isWinter=true;
    for (var i in grassArr){ 
        grass[i].color= "white"}
}
winterButton.addEventListener('click',function(){
    clickAfterWinter()})





















    
//newwwww..................

// var socket = io();

// weather = "Weather"
// function summer(){
//     weather = "summer"
// }
// function spring(){
//     weather = "spring"
// }
// function autumn(){
//     weather = "autumn"
// }
// function winter(){
//     weather = "winter"
// }

// function change(matrix){
//     for (var y=0;y<matrix.lenght;y++){
//         for (var x=0;x<matrix[y].lenght;x++){
//             if(matrix[y][x]==1){
//                 fill(gr.color);
//                 if(weather == "summer"){
//                     fill("light-orange");
//                 }
//                 else if (weather ==)
//             }
//         }
//     }
// }