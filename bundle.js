"use strict";

//Terceira implementação - Operações em Arrays
var arr = [1, 3, 4, 5, 8, 9];
console.log("Array original: " + arr); //Função map() - Percorre os itens do array.

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log("Soma do valor dos itens e do número do index: " + newArr); //Função reduce() - "Reduz" os itens do array a uma variável.

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log("Soma de todos os itens do array: " + sum); //Função filter() - "Filtra" os itens do array e retorna os resultados.

var filter = arr.filter(function (item) {
  return item % 3 === 0;
});
console.log("Itens filtrados: " + filter); //Segunda implementação - Consts & Lets

/*function teste(x) {
  let y = 2;
  if (x > 5) {
    let y = 4;

    console.log(x, y);
  }
}

console.log(y);

teste(10);
*/
//Primeira implementação - Classes

/*class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Paulo';
  }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}*/
