//Nona implementação - Object Short Syntax
//Na criação de objetos, ao se usar um parâmetro com nome de uma váriavel já exi
//tente, colocar apenas o nome da variável e vírgula.
/*
const nome = "Paulo";
const idade = 20;

//Exemplo de Sintaxe Curta de Objeto
const usuario = {
  nome,
  idade,
  empresa: 'UFRN',
};
*/
//------------------------------------------------------------------------------

//Oitava implementação - Template Literals
//Substitui o uso das aspas ("") por crases (``) para permitir chamar variáveis
//de forma mais simples através da sintaxe "${nomedavariavel}"
/*
const nome = "Paulo";
const idade = 20;

//Exemplo de Template Literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
*/
//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

//Sexta implementação - Desestruturação
/*
//Declarando um objeto
const usuario = {
  nome: 'Paulo',
  idade: 20,
  endereço: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

//Obtendo nome e idade do Usuário de forma desestruturada
//Também pode ser utilizada em funções.
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
*/
//------------------------------------------------------------------------------

//Quinta implementação - Valores padrão
/*
//O valor padrão para parâmetros de uma função deve ser especificado dentro da
//declaração da função. Exemplo abaixo:
const soma = (a = 3, b = 6) => a + b;

//Caso não sejam especificados os valores dos parâmetros na chamada da função,
//os valores utilizados serão os padrões dados acima. Exemplo:
console.log(soma(1));
console.log(soma());
*/

//------------------------------------------------------------------------------

//Quarta implementação - Arrow Functions
/*
const arr = [1, 3, 4, 5, 6];

//Remover o nome "function" da função e adicionar "=>" após os parâmetros.
//Caso a função só possua um parametro, não precisa de parênteses.
//Caso haja apenas uma linha de código na função, remover as chaves e colocar o
//código logo após a "=>"
const newArr = arr.map(item => item * 2)

console.log(newArr);

//Outro exemplo de sintaxe de função
const teste = () => ({ nome: 'Paulo' });
*/

//------------------------------------------------------------------------------

//Terceira implementação - Operações em Arrays
/*
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
*/

//------------------------------------------------------------------------------

//Segunda implementação - Consts & Lets

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

//------------------------------------------------------------------------------

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