// 1. WAF which returns a matrix n rows and m columns containing random numbers between 1 and 100
matrixRandom = (n, m) => {
    matrix = Array.from(Array(n), () => new Array(m));
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.random() * (100 - 0);
        }
    }
    return matrix;
}

// 2. WAF with n and m (rows and columns) as  parameters and returns an array with sum of numbers from every 
// column from the generated matrix (use random numbers)
matrixSum = (n, m) => {
    matrix = Array.from(Array(n), () => new Array(m));
    sum = 0
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.random() * (100 - 0);
        }
    }
    var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]))
    return colSum;
}

// 3. same as 2 but returns the sum of numbers from every line
matrixSum = (n, m) => {
    matrix = Array.from(Array(n), () => new Array(m));
    sum = 0
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.random() * (100 - 0);
        }
    }
    var rowSum = matrix.map(r => r.reduce((a, b) => a + b))
    return rowSum;
}
// 4. same as 2 but (n===m - si is a sware matrix) returns the sum of numbers UNDER the main diagonal
matrixSum = (n, m) => {
    matrix = Array.from(Array(n), () => new Array(m));
    sum = 0
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.random() * (100 - 0);
        }
    }
    for (i = 1; i < matrix.length; i++) {
        for (j = i - 1; j >= 0; j--) {
            sum = sum + matrix[i][j]
        }
    }
    return sum;
}
// 5. WAF which returns the minimum number from a matrix
minNumber = (arr) => {
    values = arr.concat.apply([], arr);
    var min = Math.min(...values);
    return min;
}

// 6. WAF which returns an array from a matrix representing all the matrix numbers in a clock direction
spiralMatrix = (matrix) => {
    const arr = [];
    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...matrix.pop().reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
}

// 7. WAF WR the sum of numbers of every min number from every line
sumOfMin = (arr) => {return arr.reduce((a, b) => a + Math.min(...b), 0)}

// 8. WAF with n and m as matrix rows and columns and returns an array with the sum of numbers from every diagonal
sumDiag = (arr) => {
    firstDiag = 0;
    secDiag = 0;
    for (i = 0; i < arr.length; i++) {
        n = arr[i].length
        firstDiag += arr[i][i];
        secDiag += arr[i][n - i - 1]
    }
    return [firstDiag, secDiag];
}

//9. Fill an array with random numbers and create a matrix with the numbers from array
createMatrix = (n) => {matrix = Array.from(Array(n), () => new Array(n));
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.random() * (100 - 0);
        }
    }
    return matrix;
}

// 10. create the multiplication numbers matrix (10X10)
multiplyMatrix = (arr1, arr2) => {
    result = []
    for (i = 0; i < arr1.length; i++) {
        result[i] = []
        for (j = 0; j < arr2[0].length; j++) {
            sum = 0
            for (k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j]
            }
            result[i][j] = sum
        }
    }
    return result;
}
