var num;
const notas = [100,50, 20, 10,5,2,1];
let qnotas;

num = prompt ('Insira o valor que será contado: ');
num = parseInt (num);
console.log ('Numero digitado: ' + num)

for (let nota of notas ) {
   qnotas = parseInt (num/nota);
   if (qnotas != 0) {
  console.log ( qnotas + ' de $' + nota + ',00' );
  if (num > 0) {
  num = num % nota;
  }
}
}
