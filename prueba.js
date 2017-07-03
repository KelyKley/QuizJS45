// PROBLEMA 1 : Dado 3 números(N1,N2,N3) calcular el Máximo y Mínimo. Sin usar for​.​
var maxi = (Math.max(10,30,5));
var mini = (Math.min(10,30,5));

console.log("Máximo = "+ maxi + "   Mínimo = " +mini );

//PROBLEMA 2 : Dado un arreglo A de números, imprimir los elementos con índice par e impar por separado. Hint : usar el operador​	 ​ módulo(%).​
var par = [];
var impar=[];
var arr = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68] ;

function mostrar(arr){
for (var i=0; i<arr.length;i++){
  if(i%2==0)
    par.push(arr[i]);
  else
    impar.push(arr[i]);
}
  console.log ("Elementos de posición par : "+ par);
  console.log("Elementos de posición impar : "+ impar);
}
mostrar(arr);

//PROBLEMA 3 :  Dado un arreglo A, cómo invertiría su orden?.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var invertida = arr.reverse().toString();

console.log(invertida);

//PROBLEMA 4 :
var num = "";
var limite = 5;
for(var i=1; i<=limite; i++)
{
  num = num + i
  console.log(num);
}
