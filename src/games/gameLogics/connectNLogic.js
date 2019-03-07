function differentRows(vector, numberOfBoxes){
    let previous = null;
    return vector.every((value) =>
            {
                const currentRow = Math.floor(value/numberOfBoxes);
                let ret = false;
                if(previous === null){
                    previous = currentRow;
                    return true;
                }
                if(previous - 1 === currentRow){
                    ret = true;
                    previous = currentRow;
                }
                return ret;
            });
}

function  differentColumn(vector, numberBoxes) {
    let column = Math.floor(vector[0]/numberBoxes);
    return vector.every(value => column === Math.floor(value / numberBoxes));
}
let calculateWinner = function(boxes, numberBoxes,  numberBoxesToVerify){
    let structure = (value, unit) => Array.from(new Array(numberBoxesToVerify), (v, index) => value - unit * index);
    for(let i = boxes.length - 1; i >= numberBoxes - 1; i = i - numberBoxes ){
        for(let j = i; j > i - numberBoxes; j--){
            if(boxes[j]) {
                if (structure(j, numberBoxes).every((index) => boxes[j] === boxes[index])) {
                    return [boxes[j], structure(j, numberBoxes)];
                }
                if( differentColumn(structure(j, 1), numberBoxes) && structure(j, 1).every(index => boxes[j] === boxes[index])){
                    return [boxes[j], structure(j, 1)];
                }
                if( differentRows(structure(j, numberBoxes + 1), numberBoxes) && structure(j, numberBoxes + 1).every(index => boxes[j] === boxes[index])){
                    return [boxes[j], structure(j, numberBoxes + 1)];
                }
                if( differentRows(structure(j, numberBoxes - 1), numberBoxes) && structure(j, numberBoxes - 1).every(index => boxes[j] === boxes[index])){
                    return [boxes[j], structure(j, numberBoxes - 1)];
                }
            }
        }
    }
    return null;
};

module.exports.calculateWinner = calculateWinner;