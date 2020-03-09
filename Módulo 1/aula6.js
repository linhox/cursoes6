//Sexta implementação - Desestruturação

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