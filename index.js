// Boletim academico com matriz

var media = [ [ ],[ ],[ ],[ ],[ ] ], 
situacao = [ [ ],[ ],[ ],[ ],[ ] ];
media[0] [0] = "MÉDIA";           situacao[0] [0] = "SITUAÇÃO";
media[1] [0] = "Historia";    situacao[1] [0] = "Historia";
media[2] [0] = "Geografia"; situacao[2] [0] = "Geografia";
media[3] [0] = "Quimica";            situacao[3] [0] = "Quimica";
media[4] [0] = "Biologia";        situacao[4] [0] = "Biologia";

for (linha=0; linha < media.length; linha++){
for (coluna=1; coluna < 11; coluna++){
     if (linha == 0){
         media[linha][coluna] = prompt ("Insira um nome");
         situacao[linha][coluna] = media[linha][coluna];
} else{
media [linha] [coluna] = prompt ("Insira a média de " + 
media [linha] [0] + " do aluno " + media[0] [coluna]);
         if (media[linha][coluna] < 6){
            situacao[linha][coluna] = "REPROVADO";
         } else{
           situacao[linha][coluna] = "APROVADO";
          }
      }
   }
}
for (linha=0; linha < situacao.length; linha++){
      for (coluna=0; coluna < 11; coluna++){
             alert (situacao[linha][coluna]);
 }
 alert ("\n");
}


