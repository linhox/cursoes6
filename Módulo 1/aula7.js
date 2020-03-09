//Sétima implementação - Rest/Spread
//REST - Pegar o resto os objetos/variáveis de uma classe/array.

//Usando rest em objeto
const usuario = {
  nome: 'Paulo',
  idade: 20,
  empresa: 'UFRN'
};

//As reticências representam o uso do rest
const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//Usando rest em array
const arr = [1, 2, 3, 4];
const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//Usando rest em parâmetros de função
function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));

//SPREAD - Compartilha as informações de uma estrutura de dados com outras

//Uso de SPREAD com arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//A sintaxe do SPREAD é a mesma do REST
const arr3 = [ ...arr1, ...arr2];

console.log(arr3);

//Uso de SPREAD com objetos
const usuario1 = {
  nome: 'Paulo',
  idade: 20,
  empresa: 'UFRN'
};

const usuario2 = { ...usuario1, nome: 'Vítor' };
