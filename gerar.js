//Todos os parametros da música juntos.
var parametros="";

//Parametros da musica
var genero="";
var duracao="";
var instrumento="";
var andamento="";

//Funções set. Recebem do HTML (gerar.html) as opções do usuário.
function setGenero(genero){
     this.genero=genero;
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
     this.parametros="python composer.py "+genero+" "+instrumento+" "+andamento;
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
fetch('http://localhost:3000',{method:'POST',body:'Humongous dong'}).then(results=>results.json()).then(console.log);
}

function retornaLink(){
     //link com a música
     var link="http:192.168.1.102:420/song.mid";

     // Código html (dividido só para facilitar escrita)
     var AbreDiv='<div class="col-12 bg-light" style="border-radius:5pt">';
     var h4 ='\n<h4 class="p-3 text-center">\nSample Gerada!\n</h4>\n';
     var texto='<p class="text-center pb-3">Clique <a href="'+link+'"">aqui</a> para ser redirecionado para página com o arquivo\n</p>';
     var fechaDiv='</div>';

     // Junta código HTML
     var caixaResposta = AbreDiv+h4+texto+fechaDiv;

     // Exibe caixa e link para o usuário
     var resposta = document.getElementById('musica');
     resposta.innerHTML=caixaResposta;
}


/*
function teste2(){
	var teste = document.getElementById("teste2");
	teste.innerHTML=parametros;
}*/

