//Quarta implementação - Arrow Functions

const arr = [1, 3, 4, 5, 6];

//Remover o nome "function" da função e adicionar "=>" após os parâmetros.
//Caso a função só possua um parametro, não precisa de parênteses.
//Caso haja apenas uma linha de código na função, remover as chaves e colocar o
//código logo após a "=>"
const newArr = arr.map(item => item * 2)

console.log(newArr);

//Outro exemplo de sintaxe de função
const teste = () => ({ nome: 'Paulo' });