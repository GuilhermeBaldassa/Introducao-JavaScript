
//              Strings

/*var nome = "Guilherme Baldassa";
var idade = 31;
var idade2 = 35;
var frase = "Japão é o melhor time do mundo."
//alert(nome + " tem " + idade + " anos.");
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil")); // replace ("opção1", "opção2");  ----troca opção1 pela 2.
console.log(frase.toUpperCase("Japão", "Brasil")); // Passa toda a string para Caixa Alta.
console.log(frase.toLowerCase("Japão", "Brasil")); // Passa toda a string para minúsculas.*/


//                 Arrays

/*var lista = ["maça", "laranja", "pera", "uva", "goiaba"];
lista.reverse(); // altera ordem de tras pra frente;
lista.push("melão");// acrescenta o item a lista;
lista.pop(); // retira o último elemento da lista;
console.log(lista);
console.log(lista.toString()); // transforma o array em apenas string;
console.log(lista.join(" - ")); // transforma a vrígula no que eu declarar dentro do parenteses;
console.log(lista.length); // mostra o tamanho do array;
console.log(lista[2]); // mostra o valor do array na posição 2;*/


//               Dicionários

/*var fruta = {nome: "Laranja", cor: "Laranja", sabor: "cítrico"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.sabor);*/



//             Arrays de Dicionários

/*var frutas = [{nome: "Laranja", cor: "Laranja"},{nome: "uva", cor: "roxa"}]; //dois objetos dentro do array;
console.log(frutas);
console.log(frutas[1].nome); //nome da fruta na posição 1 de frutas;
console.log(frutas[0].cor); //nome cor da fruta na posição 0 de frutas;*/

//              Condicionais 

/*var idade = prompt("Digite a sua idade: "); //prompt gera uma caixa de texto para o usuário digitar.

if (idade >= 18){
    alert("Você é maior de idade.");
}else{
    alert("Você é menor de idade.");
}*/


//            Laços de repetição

// Repetição com while

/*var count = 0;

while(count <= 5){
    console.log(count);
    count = count + 1; // ou count++;
}

//Repetição com for

var count1;

for(count1 = 0; count1 <= 5; count1++){
    console.log(count1)
}*/

//              Data

/*var d = new Date(); // new Date traz a data em formato completo(dia, mes, ano, hora, fuso, minuto.....)
console.log(d);
alert(d.getDay()); // .getDay traz só o dia.
alert(d.getMonth() + 1); // getMonth traz só o mês, mas tem que somar 1 porque ele começa em 0.*/

//          Funções


/*function soma (n1, n2){
    return n1 + n2;
}

console.log(soma(5, 10)); //passando a nome da função e os valores ele executa a soma.

var validar = 0;



function validaIdade(idade){
    if(idade>= 18){
        validar = true;
    }else{
        validar= false;
    }
}

idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar);*/

function botao(){
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar(){
    window.open("https://www.dio.me/");
}

function trocar(elemento){
   // document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse aqui." ou 
    elemento.innerHTML = "Obrigado por passar o mouse aqui."
}

function voltar(){
    document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui."
}

function change(elemento){
    console.log(elemento.value);
}