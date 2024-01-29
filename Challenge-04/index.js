/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (param) {
  return param ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy();
isTruthy(false);
isTruthy(-0);
isTruthy("");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy("a");
isTruthy(true);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var car = {
  brand: "Land Rover",
  model: "Range Rover",
  licensePlate: "1234-aqw",
  year: "2019",
  color: "Black",
  numberOfDoors: 2,
  seats: 5,
  quantityPeople: 5,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

car.changeColor = function (color) {
  car.color = color;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
car.getColor = function () {
  return car.color;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
car.getModel = function () {
  return car.model;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
car.getBrand = function () {
  return car.model;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

car.getBrandModel = function () {
  return `This car is a ${car.brand} ${car.model}`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
car.addPeople = function (numberPeoples) {
  var totalPeoples = car.quantityPeople + numberPeoples;
  if (car.quantityPeople === car.seats && totalPeoples >= car.seats) {
    return "The car is full";
  }
  if (totalPeoples > car.seats) {
    var quantityOfPeopleThatFit = car.seats - car.quantityPeople;
    var pluralOrSingular = quantityOfPeopleThatFit === 1 ? "people" : "peoples";
    return `It can only fit ${quantityOfPeopleThatFit} more ${pluralOrSingular} in the car!`;
  }

  car.quantityPeople += numberPeoples;
  return `We already have ${totalPeoples} people in the car`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
car.getColor();
//black

// Mude a cor do carro para vermelho.
car.changeColor("Blue");

// E agora, qual a cor do carro?
//blue

// Mude a cor do carro para verde musgo.
car.changeColor("Green Musgo");

// E agora, qual a cor do carro?
// "Green Musgo"

// Qual a marca e modelo do carro?
// brand"'Land Rover',
// model: 'Range Rover',

// Adicione 2 pessoas no carro.
car.addPeople(2);
// 'We already have 2 people in the car'

// Adicione mais 4 pessoas no carro.
car.addPeople(4);
// 'It can only fit 3 more peoples!'

// Faça o carro encher.
car.addPeople(3);
// 'We already have 5 people in the car'

// Tire 4 pessoas do carro.
car.addPeople(-4);
// 'We already have 1 people in the car'

// Adicione 10 pessoas no carro.
car.addPeople(10);
// 'The car is full'

// Quantas pessoas temos no carro?
car.quantityPeople;
// 5
