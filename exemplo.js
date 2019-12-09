"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
//npm install --save @types/readline-sync
var tituloDigitado = readlineSync.question('Digite o titulo ');
var descricaoDigitada = readlineSync.question('Digite a descricao ');
var textogerado = "html><head></head><body><h1>" + tituloDigitado + "</h1><hr /><p>'" + descricaoDigitada + "</p></body></html>";
console.log(textogerado);
