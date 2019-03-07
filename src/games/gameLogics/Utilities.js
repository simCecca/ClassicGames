function matrixToArrayConverter(id, numberBoxes){
    const row = Math.floor(id / numberBoxes);
    const column = id - row * numberBoxes;
    return {row: row, column: column};
}

function createEmptyMatrix(number){
    const matrix = [];
    for(let i = 0; i < number; i++){
        const row = [];
        for(let j = 0; j < number; j++){
            //row.push(j + (i * number));
            row.push(null);
        }
        matrix.push(row);
    }
    return matrix;
}

module.exports.matrixToArrayConverter = matrixToArrayConverter;
module.exports.createEmptyMatrix = createEmptyMatrix;