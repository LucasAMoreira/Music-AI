//Todos os parametros da música juntos.
var parametros="";

//Parametros da musica
var tipo="";
var cenario="";
var duracao="";
var instrumento="";
var andamento="";

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
function setAndamento(andamento){
     this.andamento=andamento;
}               

//Avisa para usuário qual é o instrumento selecionado
function mostraInstrumento(){
     var selecionado=document.getElementById("selecionado");
     selecionado.innerHTML="Instrumento selecionado: <strong>"+this.instrumento+"</strong>";
}

// Gera String com os parâmetros da música.
function geraString(){
     this.parametros="python composer.py "+tipo+" "+cenario+" "+duracao+" "+instrumento+" "+andamento;;
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
fetch('http://localhost:3000',{method:'POST',body:'Humongous dong'}).then(results=>results.json()).then(console.log);

}


/*
function teste2(){
	var teste = document.getElementById("teste2");
	teste.innerHTML=parametros;
}
*/
