recebeValores("valorA", "valorB", "valorC", "valorD", "valorE");
function recebeValores() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < parametros.length; i++) {
        var textoGerado = "";
        textoGerado += "<div id = id" + i + ">";
        textoGerado += parametros[i] + "</div>";
        document.getElementById("div").innerHTML += textoGerado;
    }
    return result;
}
