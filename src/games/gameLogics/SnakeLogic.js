class SnakeLogic{
    constructor(boardDimensions){
        this.boardDimensions = boardDimensions;
    }
    newApplePosition(){
        return {row: Math.floor(Math.random() * this.boardDimensions), column: Math.floor(Math.random() * this.boardDimensions)};
    }

    controller(event, direction){
        const newDirection = direction;
        if (event.keyCode === 38) { //up arrow
            if (direction.y !== 1) { //if you are going down you can't going up
                newDirection.x = 0;
                newDirection.y = -1;
            }
        } else if (event.keyCode === 40) {//down arrow
            if (direction.y !== -1) {//if you are going up you can't going down
                newDirection.x = 0;
                newDirection.y = 1;
            }
        } else if (event.keyCode === 39)  {//right arrow
            if (direction.x !== -1) {//if you are going to left you can't turn right
                newDirection.x = 1;
                newDirection.y = 0;
            }
        } else if (event.keyCode === 37)  { //left arrow
            if (direction.x !== 1) {//if you are going to right you can't turn left
                newDirection.x = -1;
                newDirection.y = 0;
            }
        }
        return newDirection;
    }

    snake
}

export default SnakeLogic;