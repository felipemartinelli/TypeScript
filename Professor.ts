import { Pessoa } from "./Pessoa";
import { timingSafeEqual } from "crypto";

export class Professor extends Pessoa{

    private valorHora:number;
    private numHoras:number;
    private areaFormacao: string;

    public getValorHora():number{
        return this.valorHora;
    }

    public setvalorHora(valorHora : number):void{
        this.valorHora = valorHora;
    }

    public getNumHoras():number{
        return this.numHoras;
    }

    public setNumHoras(numHoras:number):void{
        this.numHoras = numHoras;
    }

    public getAreaFormacao():string{
        return this.areaFormacao;
    }

    public setAreaFormacao(areaFormacao:string):void{
        this.areaFormacao = areaFormacao;
    }


}
