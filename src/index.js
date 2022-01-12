module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let newMatrix = [];
    for (i = 0; i < matrix.length; i++) {
        if ([i] % 2 === 0) {
            newMatrix = [...newMatrix, ...matrix[i]];
        } else {
            newMatrix = [...newMatrix, ...matrix[i].reverse()];
        }
    }
    return newMatrix;
};
