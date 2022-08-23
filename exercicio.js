var x = 10;
var total = 0;

console.log("Numeros divisiveis por 3 ou 5:")
for (i = 1; i < x; i++) {
   if (i % 3 === 0 || i % 5 === 0) {
      total += i;
      console.log(i)
   }
   
}

console.log("Soma total dos valores: "+total)