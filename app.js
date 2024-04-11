// atividade 2
let titulo = document.querySelector ('h1');
titulo.innerHTML = "Hora do desafio";
 
// atividade 3
function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
   function validarChute(){
       console.log("O botão foi clicado!");
   }
 
   // atividaade 4
   function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
   function validarChute(){
       alert("Eu amo JS!");
   }
 
   // atividade 5
   function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
 
   let cidade;
   function validarChute(){
    cidade = prompt ("Digite sua cidade:");
 
       alert(`Eu estive na cidade de ${cidade} e lembrei de você!`);
   }
   
 
   // atividade 6
   function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
 
 
   let soma;
   function clickSoma(){
    let numero1 = parseInt (prompt("Digite o primeiro número"));
    let numero2 = parseInt (prompt("Digite o segundo número"));
    soma = numero1 + numero2
    alert(`A soma dos números é: ${soma}.`);
   }
   





   //05/04 

   function verificarConsole(){
    console.log("Olá Mundo!");
}
verificarConsole();

//

let nome = prompt ("Digite seu nome:");
function verificarConsole(name){
    console.log(`Olá, ${name}!`);
}
verificarConsole();




//
let numero = parseInt(prompt ("Digite um numero:"));
function dobro(num){
    return num * 2;
}
let resultado = dobro(numero);
alert (`O dobro do número é ${resultado}`);





 //
 let n1 = prompt ("digite um numero");
let n2 = prompt ("digite um numero");
let n3 = prompt ("digite um numero");

function calcularMedia(nota1, nota2, nota3){
    return (nota1 +nota2 +nota3)/3;
}

let media = calcularMedia(n1,n2,n3);
 alert (`o resultado é ${media}`);





 //
 let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite um número"));

function verificarConsole(num1, num2) {
    if (num1 > num2) {
        return alert(`O maior número é o ${num1}`);
    }
    else {
        return alert(`O maior número é o ${num2}`);
    }
}
verificarConsole(n1, n2);
//



let n1 = parseInt(prompt("Digite um número"));

 function verificarConsole(num1) {
     return num1*num1
 }
 let resultado = verificarConsole(n1)
 alert (` Resultado: ${n1} x  ${n1} = ${resultado}`)

 verificarConsole();





 ///////////////////////////////////////////////// 11/04/2024  ////////////////////////////////////////////////////////////////////////

 let peso = parseFloat(prompt("Digite seu peso"));
let altura = parseFloat(prompt("digite sua altura"));


function calculoIMC(pesoPar, alturaPar) {
    return pesoPar/(alturaPar*alturaPar);
}

let resultado = calculoIMC(peso, altura);
alert (`Seu IMC é ${resultado.toFixed(2)}`)


//
let numero = prompt ("digite um número");
function fatorial(num) {
     numero = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      numero *= num;
    }
    return numero;
  }
  numero = fatorial(numero);
  alert (`fatorial: ${numero}`);


  ///

  let largura = parseFloat(prompt("Digite a largura da sua sala"));
let altura = parseFloat(prompt("digite a altura da sua sala"));


function calculo(larguraPar, alturaPar) {
    return larguraPar*alturaPar;
}
let resultado = calculo(largura, altura);

function calculo2(larguraPar, alturaPar) {
    return (larguraPar*2)+(alturaPar*2);
}
let resultado2 = calculo2(largura, altura);
alert (`O perimetro da sala é ${resultado2} metros e a area da sala é ${resultado} metros`);


////

let raio = parseFloat(prompt("Digite o raio da sua sala"));

function calculo(raioPar) {
    return (raioPar*raioPar)*3.14;
}
let resultado = calculo(raio);

function calculo2(raioPar) {
    return (raioPar+raioPar)*3.14;
}
let resultado2 = calculo2(raio);
alert (`O perimetro da sala é ${resultado2.toFixed(2)} metros e a area da sala é ${resultado.toFixed(2)} metros`)

///



