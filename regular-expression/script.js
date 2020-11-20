const frase = 'JavaScript';
const regexp = /a/;
const frasenova = frase.replace(regexp, 'b');
console.log(frasenova); //JbvaScript

//////////////////// Literal
const regexp1 = /Java/; // procura: J sededo de a , v E a
console.log('JavaScript'.replace(regexp1, 'Type')); //TypeScript

//// fralg: g

const regexp2 = /a/g; // o g serve para selecionar todos os a que tiver 
console.log("JavaScript".replace(regexp2, 'i')); // JiviScript

////flag: i
const regexp3 = /Pe/gi; // Procura todo PE.PE ,pE e pe
console.log('Perdeu perdido'.replace(regexp3, 'Ba')); // Bardeu Bardido

////  Character Class
const regexp4 = /[ai]/gi; //Procura Todo a,A,i,I;
console.log('JavaScript'.replace(regexp4, 'u')); // JuvuScrupt

/// character class e especiais
const regexp5 = /[-.]/g;
console.log('111.222-333-44'.replace(regexp5, '')); //11122233344

// UM ou OUTRO

const regexp6 = /Bra[sz]il/g; // procura B, seguido de r , a seguido de s ou z seguido de i,l
console.log('Brasil é com z: Brazil'.replace(regexp6, 'Prazer')); //Prazer é com z: Prazer