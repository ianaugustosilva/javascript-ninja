/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = "UEFA Euro";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams = ["Portugal", "Italia", "Ireland", "Spain", "France"];

console.log("Teams that are participating in the championship", teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition(position) {
  if (position < 1 || position > 5) {
    return "We don't have information about the team that is in that position.";
  }

  return `The team in ${position} is ${teams[position - 1]}.`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(2));
console.log(showTeamPosition(4));
console.log(showTeamPosition(8));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var counter = 20;

while (counter <= 30) {
  console.log(counter);
  counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

function convertToHex(color) {
  var hexa;

  switch (color) {
    case "Red":
      return "The hexadecimal for this color is #FF0000";
    case "Yellow":
      return "The hexadecimal for this color is #FFF000";
    case "Blue":
      return "The hexadecimal for this color is #000CFF";
    case "Magenta":
      return "The hexadecimal for this color is #DA00FF";
    case "White":
      return "The hexadecimal for this color is #FFF";
    default:
      `We do not have the hexadecimal equivalent for ${color}`;
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex("Red"));
console.log(convertToHex("Cyan"));
console.log(convertToHex("Black"));
console.log(convertToHex("Purple"));
console.log(convertToHex("Magenta"));
console.log(convertToHex("Green"));
console.log(convertToHex("Blue"));
console.log(convertToHex("Yellow"));