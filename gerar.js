//Todos os parametros da música juntos.
var parametros="";

//Parametros da musica
var tipo="";
var cenario="";
var duracao="";
var instrumento="";

//Funções set. Recebem do HTML (gerar.html) as opções do usuário.
function setTipo(tipo){
     this.tipo=tipo;
}
function setCenario(cenario){
     this.cenario=cenario;
}
function setInstrumento(instrumento){
     this.instrumento=instrumento;
}
function setDuracao(){
     duracao=document.getElementById("duracao");
     this.duracao=duracao.value;
}                     

// Gera String com os parâmetros da música.
function geraString(){
     this.parametros="python composer.py "+tipo+" "+cenario+" "+duracao+" "+instrumento;
}

/*
function teste2(){
	var teste = document.getElementById("teste2");
	teste.innerHTML=parametros;
}
*/

