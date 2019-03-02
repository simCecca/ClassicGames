function differentRows(vector){
    let previous = null;
    return vector.every((value) =>
            {
                const currentRow = Math.floor(value/7);
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

function  differentColumn(vector) {
    let column = Math.floor(vector[0]/7);
    return vector.every(value => column === Math.floor(value / 7));
}
let calculateWinner = function(boxes){
    const length = 7, oneUnitColumn = 7;
    let structure = (value, unit) => Array.from(new Array(4), (v, index) => value - unit * index);
    for(let i = boxes.length - 1; i >= length - 1; i = i - length ){
        for(let j = i; j > i - length; j--){
            if(boxes[j]) {
                if (structure(j, oneUnitColumn).every((index) => boxes[j] === boxes[index])) {
                    return [boxes[j], structure(j, oneUnitColumn)];
                }
                if( differentColumn(structure(j, 1)) && structure(j, 1).every(index => boxes[j] === boxes[index])){
                    return [boxes[j], structure(j, 1)];
                }
                if( differentRows(structure(j, oneUnitColumn + 1)) && structure(j, oneUnitColumn + 1).every(index => boxes[j] === boxes[index])){
                    return [boxes[j], structure(j, oneUnitColumn + 1)];
                }
                if( differentRows(structure(j, oneUnitColumn - 1)) && structure(j, oneUnitColumn - 1).every(index => boxes[j] === boxes[index])){
                    return [boxes[j], structure(j, oneUnitColumn - 1)];
                }
            }
        }
    }
    return null;
};

module.exports.calculateWinner = calculateWinner;