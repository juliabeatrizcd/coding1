 // Declaração da variável nome e atribuição do valor

let nome = "Julia Beatriz";

// Declaração da variável idade e atribuição do valor

let idade = 18;

// Imprime a mensagem no console

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
 

 // Declaração das variáveis nome e cidade

 let cidade = "Olinda";
 
 // Imprime a mensagem no console
 
 console.log(`${nome} é de ${cidade}.`);


 // Declaração das variáveis num1 e num2

let num1 = 10;

let num2 = 20;

// Operações básicas e impressão dos resultados

console.log(`A soma de ${num1} e ${num2} é: ${num1 + num2}`);

console.log(`A subtração de ${num1} e ${num2} é: ${num1 - num2}`);

console.log(`A multiplicação de ${num1} e ${num2} é: ${num1 * num2}`);

console.log(`A divisão de ${num1} por ${num2} é: ${num1 / num2}`);
 

// Declaração das variáveis base e altura

let base = 8;

let altura = 5;

// Cálculo da área do triângulo

let area = (base * altura) / 2;

// Imprime o resultado no console

console.log(`A área do triângulo é ${area}`);
 

// Declaração das variáveis para as 3 notas

let nota1 = 8;

let nota2 = 7.5;

let nota3 = 9;

// Cálculo da média

let media = (nota1 + nota2 + nota3) / 3;

// Imprime o resultado da média no console

console.log(`O resultado da média é ${media.toFixed(2)}`);


// Declaração das variáveis para o preço original e o percentual de desconto

let precoOriginal = 100; // Preço original do produto

let percentualDesconto = 20; // Percentual de desconto

// Cálculo do valor do desconto

let valorDesconto = (precoOriginal * percentualDesconto) / 100;

// Cálculo do preço final

let precoFinal = precoOriginal - valorDesconto;

// Exibe o resultado com uma mensagem personalizada

console.log(`O valor final do produto, com ${percentualDesconto}% de desconto, é R$ ${precoFinal.toFixed(2)}.`);


// Declaração da variável para o salário bruto

let salarioBruto = 4000; // Exemplo de salário bruto

// Variável para armazenar o valor do imposto

let imposto;

// Simulação de uma tabela de alíquotas

if (salarioBruto <= 1903.98) {

    imposto = 0;

} else if (salarioBruto <= 2826.65) {

    imposto = salarioBruto * 0.075; // Alíquota de 7.5%

} else if (salarioBruto <= 3751.05) {

    imposto = salarioBruto * 0.15; // Alíquota de 15%

} else if (salarioBruto <= 4664.68) {

    imposto = salarioBruto * 0.225; // Alíquota de 22.5%

} else {

    imposto = salarioBruto * 0.275; // Alíquota de 27.5%

}

// Exibe o valor do imposto e a mensagem personalizada

console.log(`O imposto de renda sobre o salário de R$ ${salarioBruto.toFixed(2)} é R$ ${imposto.toFixed(2)}.`);
 
 
 
  