//Quinta implementação - Valores padrão

//O valor padrão para parâmetros de uma função deve ser especificado dentro da
//declaração da função. Exemplo abaixo:
const soma = (a = 3, b = 6) => a + b;

//Caso não sejam especificados os valores dos parâmetros na chamada da função,
//os valores utilizados serão os padrões dados acima. Exemplo:
console.log(soma(1));
console.log(soma());
