class species{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
    
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ]; 
        }
        chooseCell(character) {
            var found = [];
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                    if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                    }
                }
            
            }
        return found;
        }
        changeLimit(newLimit){
            this.energyLimit=newLimit;
        }
}

class Grass extends species{

    constructor(x,y,index){
    super(x,y,index);
    this.multiply = 0;
    // this.color = "green";
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y ],
        [this.x + 1, this.y ],
        [this.x - 1, this.y + 1],
        [this.x , this.y + 1],
        [this.x + 1, this.y + 1]
        ];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character) {
                found.push(this.directions[i]);
                }
            }
        
        }
    return found;

    }

    mul(){

        this.multiply++;
        var newCell = random(this.chooseCell(0));
        console.log(newCell, this.multiply);
        if (this.multiply >= 8 && newCell) {
        var newGrass = new Grass(newCell[0], newCell[1], this.index);
        grassArr.push(newGrass);
        matrix[newCell[1]][newCell[0]] = 1;
        this.multiply = 0;
        
        }
    }

}

class GrassEater extends species {

    constructor(x,y,index) {
    super(x,y,index);
    this.energy = 7;
    this.energyLimit = 5;
    this.directions = [];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }

    getNewCoordinates(){

        this.directions = [
        [this.x - 1, this.y - 1],
        [this.x , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y ],
        [this.x + 1, this.y ],
        [this.x - 1, this.y + 1],
        [this.x , this.y + 1],
        [this.x + 1, this.y + 1]
        ];
        
    }
    move(){
        this.getNewCoordinates()
        var newCell = random(this.chooseCell(0));
        console.log(newCell);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;  
            this.x = newX;
            this.y = newY;
        }
    }
    eat(){
        this.getNewCoordinates()
        
        var newCell = random(this.chooseCell(1));
        console.log(newCell);
        if (newCell){
            this.energy++;
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x=newX;
            this.y=newY;
            matrix[newY][newX] = 2;

        for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
            }
        }
        }
        else {
            this.energy--;
            this.move()
        }
        if (this.energy <= 0){
            this.die();
        }
    }
    mul(){

        var newCell = random(this.chooseCell(0));
        console.log(newCell);
        if (this.energy >= this.energyLimit && newCell) {
        var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
        grassEat.push(newGrassEater);
        matrix[newCell[1]][newCell[0]] = 2;
        this.energy = 2;
        }
        else {
            this.eat();
        }
        
    }
    die(){
        matrix[this.y][this.x] = 0
            for (var i in grassEat) {
                if (this.x == grassEat[i].x && this.y == grassEat[i].y) {
                grassEat.splice(i, 1);
                break;
                }
            }
    }

}

class Predator extends species{
    constructor(x,y,index) {
        super(x,y,index);
        this.energy = 9;
        this.energyLimit = 5;
        this.directions = [];
        }
    
        chooseCell(character) {
            this.getNewCoordinates()
            return super.chooseCell(character)
        }
    
        getNewCoordinates(){
    
            this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];
            
        }
        move(){
            this.getNewCoordinates()
            var newCell = random(this.chooseCell(0));
            console.log(newCell);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 3;
                matrix[this.y][this.x] = 0;  
                this.x = newX;
                this.y = newY;
            }
        }
        eat(){
            this.getNewCoordinates()
            
            var newCell = random(this.chooseCell(2) && this.chooseCell(4));
            //var newCell1 = random(this.chooseCell(4));
            console.log(newCell);
            //console.log(newCell1);
            if (newCell){
                this.energy++;
                matrix[this.y][this.x] = 0;
                var newX = newCell[0];
                var newY = newCell[1];
                this.x=newX;
                this.y=newY;
                matrix[newY][newX] = 3;
                
            for (var i in grassEat) {
                    if (newX == grassEat[i].x && newY == grassEat[i].y) {
                        grassEat.splice(i, 1);
                        break;
                    }      
                // else if (newX == flower[i].x && newY == flower[i].y) {
                //     flower.splice(i, 1);
                //     break;
                // }
            }  
        }    

            else {
                this.energy--;
                this.move()
            }
            if (this.energy <= 0){
                this.die();
            }
        }
        mul(){
    
            var newCell = random(this.chooseCell(0));
            console.log(newCell);
            if (this.multiply >= this.energyLimit && newCell) {
            var newPredator = new Predator (newCell[0], newCell[1], this.index);
            predator.push(newPredator);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 2;
            }
            else {
                this.eat();
            }
            
        }
        die(){
            matrix[this.y][this.x] = 0
                for (var i in predator) {
                    if (this.x == predator[i].x && this.y == predator[i].y) {
                    predator.splice(i, 1);
                    break;
                    }
                }
        }
    
}

class Flower extends species{

    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = 0;
    }
        getNewCoordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];         
        }

        
        chooseCell(character) {
            this.getNewCoordinates();
        return super.chooseCell(character);
    
        }
    
        mul(){
    
            this.multiply++;
            var newCell = random(this.chooseCell(0));
            console.log(newCell, this.multiply);
            if (this.multiply >= 5 && newCell) {
            var newFlower = new Flower(newCell[0], newCell[1], this.index);
            flower.push(newFlower);
            matrix[newCell[1]][newCell[0]] = 4;
            this.multiply = 0;
            
            }
        }
    
}

class Flowereater extends species{
    constructor(x,y,index) {
        super(x,y,index);
        this.energy = 5;
        this.energyLimit = 3;
        this.directions = [];
        }
    
        chooseCell(character) {
            this.getNewCoordinates()
            return super.chooseCell(character);
        }
    
        getNewCoordinates(){
    
            this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];
            
        }
        move(){
            this.getNewCoordinates()
            var newCell = random(this.chooseCell(0));
            console.log(newCell);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 5;
                matrix[this.y][this.x] = 0;  
                this.x = newX;
                this.y = newY;
            }
        }
        eat(){
            this.getNewCoordinates()
            
            var newCell = random(this.chooseCell(4));
            console.log(newCell);
            if (newCell){
                this.energy++;
                matrix[this.y][this.x] = 0;
                var newX = newCell[0];
                var newY = newCell[1];
                this.x=newX;
                this.y=newY;
                matrix[newY][newX] = 5;
    
            for (var i in flower) {
                    if (newX == flower[i].x && newY == flower[i].y) {
                        flower.splice(i, 1);
                        break;
                }
            }
            }
            else {
                this.energy--;
                this.move()
            }
            if (this.energy <= 0){
                this.die();
            }
        }
        mul(){
    
            var newCell = random(this.chooseCell(0));
            console.log(newCell);
            if (this.energy >= this.energyLimit && newCell) {
            var newflowereater = new Flowereater(newCell[0], newCell[1], this.index);
            flowereater.push(newflowereater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 1;
            }
            else {
                this.eat();
            }
            
        }
        die(){
            matrix[this.y][this.x] = 0
                for (var i in flower) {
                    if (this.x == flower[i].x && this.y == flower[i].y) {
                    flower.splice(i, 1);
                    break;
                    }
                }
        }
}

class Insect extends species{
    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = 0;
    }
     getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        }

        chooseCell(character) {
            this.getNewCoordinates()
        return super.chooseCell(character)
    }



        mul(){
            this.getNewCoordinates()
            this.multiply++;
            var newCell = random(this.chooseCell(0));
            console.log(newCell, this.multiply);
            if (this.multiply >= 4 && newCell) {
            var newinsect = new Insect(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 6;
            this.multiply = 0;

            }
        }

        move(){
            this.getNewCoordinates()
            var newCell = random(this.chooseCell(0));
            console.log(newCell);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 6;
                matrix[this.y][this.x] = 0;  
                this.x = newX;
                this.y = newY;
            }
        }
        die(){
            matrix[this.y][this.x] = 0
                for (var i in insect) {
                    if (this.x == insect[i].x && this.y == insect[i].y) {
                    insect.splice(i, 1);
                    break;
                    }
                }
        }
}