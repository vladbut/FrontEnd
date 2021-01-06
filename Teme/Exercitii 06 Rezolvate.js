//1. WAF which returns a matrix n rows and m columns containing random numbers between 1 and 100

function matrix(n,m) { 
    var arr = [];
       for (i=0; i<n; i++) { arr[i] = [];
        for(j=0; j< m;j++) { arr[i][j] = undefined;
        }
    }
    return arr;
}

//2. WAF with n and m (rows and columns) as  parameters and returns an array with sum of numbers from every column from the generated matrix (use random numbers)
//1,2,3
//4,5,6
//=====
//5,7,9  --this should be the result

function matrix(n,m) {
    var mat = [];
    for(i=0;i<n;i++) { mat[i] = []
        for(j=0;j<m;j++){
            mat[i][j] = Math.round(Math.random()*10)
        }
    };
    var colSum = mat.reduce((a, b) => a.map((x, i) => x + b[i]));
    console.log(mat); console.log(colSum);
}

//3. same as 2 but returns the sum of numbers from every line

matrix = (n,m) => {
    var mat = []; 
    for(i=0;i<n;i++) { mat[i] = [];
        for(j=0; j<m;j++) { 
            mat[i][j] = Math.round(Math.random()*10)
        }
    };
    var rowSum = mat.map(a => a.reduce((x,y)=> x+y);
    console.log(mat); console.log(rowSum);
}

//4. same as 2 but (n===m - si is a sware matrix) returns the sum of numbers UNDER the main diagonal
//2,3,4,5
//1,2,3,4
//5,6,7,8
//9,1,3,2
//--> resut should be: 2 + 3+4 + 1 +2 + 5 = 15;

// Vlad comment: Diagonala principala in matrice e de la stanga la dreapta
matrix = (n) => {
    var mat = []; 
    for(i=0;i<n;i++){
        mat[i] = []; 
        for(j=0;j<n;j++) {
            mat[i][j] = Math.round(Math.random()*10)
        }
    }
    function MainDiagSum() { 
        var sum = 0; 
        if(i == j) { 
            sum = sum + mat[i][j-1]
        }

    }
    console.log(mat); console.log(sum);
}

function SumDiag(matrice) { var sum=0;
       for(i=0; i<matrice.length-1;i++) {
        for(j=0; j<i; j++) {
            sum += matrice[i][j];
            console.log(sum);
        }
    }
}

function SumDiag(matrice) { var sum=0;
    for(i=0; i<matrice.length-1;i++) {
     for(j=0; j<i; j++) {
         sum += matrice[i][j];
         return sum;
     }
 }
}

//5. WAF which returns the minimum number from a matrix

function MinNum(matrice) { var min = 0; var aux = [];
    for(i=0; i<matrice.length; i++){ 
        for(j=0; j<=i;j++) { 
            aux.push(Math.min(...matrice[i])); 
            min = Math.min(...aux);
        }
    }
 return min;
}
//SAU mai simplu 
function MinNum(matrice) { 
    var aux = []; 
    var Min = 0;
    aux.push(
        ...matrice.map(arr => Math.min(...arr))
    ); 
    Min = Math.min(...aux)
    console.log(Min);
}



//6. WAF which returns an array from a matrix representing all the matrix numbers in a clock direction
//1,2,3
//8,9,4
//7,6,5
//will return [1,2,3,4,5,6,7,8,9]

    function clock(matrice){
    var aux = [] ; 
    aux.push(
        ...matrice.shift(),
        ...matrice.map(el=> el.pop()),
        ...matrice.map(el => el.pop().reverse()),
        ...matrice.map (el => el.shift().reverse()
    );
    return aux;
    }

//7. WAF WR the sum of numbers of every min number from every line
//.using the matrix from ex 6, the result is: 1 + 4 + 5 = 10

function MinSumNum(matrice) { 
    var aux = []; var sum = 0; 
    aux.push(
        ...matrice.map(arr => Math.min(...arr))
    );
    sum = aux.reduce((acc,el) => acc + el );
    console.log(aux);
    console.log(sum)
}

//8. WAF witn n and m as matrix rows and columns and returns an array with the sum of numbers from every diagonal
//. using matrix from 6 ==> [7, 8+ 6 = 14, 1+9+5 = 15, 2+4 = 6, 3]

function matrix(n,m) { 
    var mat = [];
       for (i=0; i<n; i++) { mat[i] = [];
        for(j=0; j< m;j++) { mat[i][j] = Math.round(Math.random() * 10);
        }
    }
    return mat;
}

sum = mat[i+n][m], mat[i+n][m-1] + mat[i+][2]

function SumAllDiag(matrice) {
    var sum = 0; 
    for(row = 0; row<matrice.length; row++) { 
        sum += matrice[row][row]
    }
console.log(sum);
}