
recebeValores("valorA","valorB","valorC","valorD","valorE");

function recebeValores(... parametros: string[]):void{

    for(let i=0;i<parametros.length;i++)
    {
        var textoGerado = "";
        textoGerado += `<div id = id${i}>${parametros[i]}</div>`;
        
        document.getElementById("div").innerHTML += textoGerado;
    }
}


