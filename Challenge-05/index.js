/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var Person = ["Ian", 26, "Italian", "Green", "Samsung"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(args) {
  return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(Person[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

array5diffs = ["Augusto", 123, false, [26, 12, "December"], { bana: "na" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(array5diffs, 0));
console.log(myFunction2(array5diffs, 1));
console.log(myFunction2(array5diffs, 2));
console.log(myFunction2(array5diffs, 3));
console.log(myFunction2(array5diffs, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
  var allBooks = {
    "Harry Pottar": {
      numberPages: 500,
      author: "J.K Rolliwng",
      publisher: "Unknow",
    },
    "Cosmos The Start": {
      numberPages: 700,
      author: "Carl Sagan",
      publisher: "Spaces",
    },
    "Mickeyland Adventures": {
      numberPages: 213,
      author: "Walter Disnei",
      publisher: "Goofy",
    },
  };

  return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Cosmos The Start"';
console.log(
  `${bookName} book has ${book("Cosmos The Start").numberPages} pages`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(
  `The author of book ${bookName} is ${book("Cosmos The Start").author}`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var bookName = "Harry Pottar";

console.log(
  `The ${bookName} was published to publisher ${
    book("Harry Pottar").publisher
  } publishing house`
);
