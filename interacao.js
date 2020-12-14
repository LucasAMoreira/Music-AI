var campo = document.getElementById('campo-pesquisa');
var tabela = document.getElementById('lista');
campo.onkeyup = function() {
    var nomeFiltro = campo.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
};

