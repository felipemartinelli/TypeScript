"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1900 || _ano > 2019) {
            console.log("Digite um ano valido");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
    };
    Carro.prototype.andar = function () {
        if (this.ligado) {
            console.log("O carro " + this.getModelo() + " do ano " + this.getAno() + "ta andando...");
        }
        else {
            console.log("ligue o carro");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado) {
            console.log("O carro " + this.getModelo() + " do ano " + this.getAno() + " acabou de parar");
        }
        else {
            console.log("ligue o carro");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
