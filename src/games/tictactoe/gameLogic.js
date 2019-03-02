let calculateWinner = function (boxes) {
    const dimension = Math.sqrt(boxes.length);
    let lines = [];
    for(let p = 0; p < dimension*2 + 2; p++){
        lines.push([]);
    }
    let column = dimension;
    for(let j = 0; j < dimension; j++) {
        column = dimension;
        lines[dimension * 2].push((dimension) * j + j);
        lines[dimension * 2 + 1].push((dimension) * (j + 1) - j - 1);
        for(let w = j * dimension; w < (j + 1) * dimension; w++){
            lines[j].push(w);
            lines[column].push(w);
            column++;
        }
    }

    for (let i = 0; i < lines.length; i++) {
        const vector = lines[i];
        if (boxes[vector[0]] && vector.every((index) => boxes[vector[0]] === boxes[index])) {
            return [boxes[vector[0]],vector];
        }
    }
    return null;
};

module.exports.calculateWinner = calculateWinner;