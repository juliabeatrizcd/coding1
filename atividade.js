// Nome e idade:

let nome = "Julia Beatriz";

let idade = 18;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
 



 // Nome e cidade:

 let cidade = "Olinda";

 console.log(`${nome} é de ${cidade}.`);




 // Variáveis numéricas num1 e num2:

let num1 = 10;

let num2 = 20;

console.log(`A soma de ${num1} e ${num2} é: ${num1 + num2}`);

console.log(`A subtração de ${num1} e ${num2} é: ${num1 - num2}`);

console.log(`A multiplicação de ${num1} e ${num2} é: ${num1 * num2}`);

console.log(`A divisão de ${num1} por ${num2} é: ${num1 / num2}`);
 



// Cálculo de Área:

let base = 8;

let altura = 5;

let area = (base * altura) / 2;

console.log(`A área do triângulo é ${area}`);
 



// Cálculo de Média:

let nota1 = 8;

let nota2 = 7.5;

let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log(`O resultado da média é ${media.toFixed(2)}`);




// Desconto:

let precoOriginal = 100; 

let percentualDesconto = 20; 

let valorDesconto = (precoOriginal * percentualDesconto) / 100;

let precoFinal = precoOriginal - valorDesconto;

console.log(`O valor final do produto, com ${percentualDesconto}% de desconto, é R$ ${precoFinal.toFixed(2)}.`);




// Imposto de Renda:

let salarioBruto = 4000; 

let imposto;

if (salarioBruto <= 1903.98) {

    imposto = 0;

} else if (salarioBruto <= 2826.65) {

    imposto = salarioBruto * 0.075; 

} else if (salarioBruto <= 3751.05) {

    imposto = salarioBruto * 0.15; 

} else if (salarioBruto <= 4664.68) {

    imposto = salarioBruto * 0.225; 

} else {

    imposto = salarioBruto * 0.275; 

}

console.log(`O imposto de renda sobre o salário de R$ ${salarioBruto.toFixed(2)} é R$ ${imposto.toFixed(2)}.`);
 



 // Conversor de Moedas:

let moedaInicial = "Dólar"
;
let moedaFinal = "Real";

let valorInicial = 100; 

// Taxa de câmbio (1 dólar = 5 reais)
let taxaDeCambio = 5;

let valorConvertido = valorInicial * taxaDeCambio;

console.log(`${valorInicial} ${moedaInicial} equivale a ${valorConvertido} ${moedaFinal}.`);




// Convertendo Celsius para Fahrenheit

let temperaturaCelsius = 25; 

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log(`${temperaturaCelsius}°C equivale a ${temperaturaFahrenheit}°F.`);




// Calculadora de IMC

peso = 70;

altura = 1.75;

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);



 
  