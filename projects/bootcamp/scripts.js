/* document.getElementById('createMatrixBtn').addEventListener('click', createMatrices);
document.getElementById('calculateBtn').addEventListener('click', calculate);

function createMatrices() {
    let rows = document.getElementById('rows').value;
    let cols = document.getElementById('cols').value;

    let matrixInput = document.getElementById('matrixInput');
    matrixInput.innerHTML = '';

    for (let m = 1; m <= 2; m++) {
        let matrix = document.createElement('div');
        matrix.innerHTML = `<h2>Matrix ${m}</h2>`;
        for (let i = 0; i < rows; i++) {
            let row = document.createElement('div');
            for (let j = 0; j < cols; j++) {
                let input = document.createElement('input');
                input.type = 'number';
                input.id = `matrix${m}-${i}-${j}`;
                row.appendChild(input);
            }
            matrix.appendChild(row);
        }
        matrixInput.appendChild(matrix);
    }
}
 */
document.getElementById('createMatrixBtn').addEventListener('click', createMatrices);
document.getElementById('calculateBtn').addEventListener('click', calculate);

function createMatrices() {
    let rows1 = document.getElementById('rows1').value;
    let cols1 = document.getElementById('cols1').value;
    let rows2 = document.getElementById('rows2').value;
    let cols2 = document.getElementById('cols2').value;

    let matrixInput = document.getElementById('matrixInput');
    matrixInput.innerHTML = '';

    createMatrix(matrixInput, 'Matrix 1', rows1, cols1);
    createMatrix(matrixInput, 'Matrix 2', rows2, cols2);
}

function createMatrix(parent, title, rows, cols) {
    let matrix = document.createElement('div');
    matrix.innerHTML = `<h2>${title}</h2>`;
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < cols; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.id = `${title}-${i}-${j}`;
            row.appendChild(input);
        }
        matrix.appendChild(row);
    }
    parent.appendChild(matrix);
}

function calculate() {
    let rows1 = document.getElementById('rows1').value;
    let cols1 = document.getElementById('cols1').value;
    let rows2 = document.getElementById('rows2').value;
    let cols2 = document.getElementById('cols2').value;
    let results = document.getElementById('results');
    results.innerHTML = '';

    let matrix1 = getMatrixValues('Matrix 1', rows1, cols1);
    let matrix2 = getMatrixValues('Matrix 2', rows2, cols2);

    let sum = addMatrices(matrix1, matrix2);
    let difference = subtractMatrices(matrix1, matrix2);
    let product = multiplyMatrices(matrix1, matrix2);

    if (sum) {
        results.innerHTML += `<h2>Sum:</h2>${matrixToHTML(sum)}`;
    } else {
        results.innerHTML += `<h2>Sum:</h2><p>Cannot add matrices with different dimensions.</p>`;
    }
    if (difference) {
        results.innerHTML += `<h2>Difference:</h2>${matrixToHTML(difference)}`;
    } else {
        results.innerHTML += `<h2>Difference:</h2><p>Cannot subtract matrices with different dimensions.</p>`;
    }
    if (product) {
        results.innerHTML += `<h2>Product:</h2>${matrixToHTML(product)}`;
    } else {
        results.innerHTML += `<h2>Product:</h2><p>Cannot multiply matrices with incompatible dimensions.</p>`;
    }
}

function getMatrixValues(title, rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(+document.getElementById(`${title}-${i}-${j}`).value);
        }
    }

    return matrix;
}

// The rest of the code remains the same as in the previous answer.

function addMatrices(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        return null;
    }

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push([]);
        for (let j = 0; j < a[i].length; j++) {
            result[i].push(a[i][j] + b[i][j]);
        }
    }
    return result;
}

function subtractMatrices(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        return null;
    }

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push([]);
        for (let j = 0; j < a[i].length; j++) {
            result[i].push(a[i][j] - b[i][j]);
        }
    }
    return result;
}

function multiplyMatrices(a, b) {
    if (a[0].length !== b.length) {
        alert("The number of columns in Matrix 1 must match the number of rows in Matrix 2.");
        return null;
    }
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push([]);
        for (let j = 0; j < b[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < a[i].length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

function matrixToHTML(matrix) {
    let html = '<table>';
    for (let i = 0; i < matrix.length; i++) {
        html += '<tr>';
        for (let j = 0; j < matrix[i].length; j++) {
            html += `<td> ${matrix[i][j]}</td> `;
        }
        html += '</tr>';
    }
    html += '</table>';
    return html;
}