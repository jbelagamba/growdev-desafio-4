// Armazena os dados
const nome = "Geromel";

const peso = 84;

const altura = 1.90;


// Calcula o IMC
const imc = peso / (altura * altura);

// Exibe resultado do IMC 
console.log(`O resultado do IMC de ${nome} é: ${imc}`);

if (imc >= 30) {
  // Exibe feedback positivo se o imc for maior ou igual a 30
  console.log(`${nome}, você está acima do peso.`);
} else {
  // Exibe feedback negativo se o imc for menor ou igual a 29.9
  console.log(`${nome}, você não está acima do peso.`);
}

//Exibe mensagem very very true
console.log(`${nome} nunca falha. Amém!`);