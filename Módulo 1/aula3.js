//Terceira implementação - Operações em Arrays

const arr = [1, 3, 4, 5, 8, 9];

console.log("Array original: " + arr);

//Função map() - Percorre os itens do array.
const newArr = arr.map(function(item, index){
  return item + index;
});

console.log("Soma do valor dos itens e do número do index: " + newArr);

//Função reduce() - "Reduz" os itens do array a uma variável.
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log("Soma de todos os itens do array: " + sum);

//Função filter() - "Filtra" os itens do array e retorna os resultados.
const filter = arr.filter(function(item) {
  return item % 3 === 0;
});

console.log("Itens filtrados: " + filter);

//Função find() - Verifica e/ou encontra uma informação dentro do array
const find = arr.find(function(item) {
  return item === 3;
});

console.log("Resultado da busca: " + find);