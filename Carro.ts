export class Carro{
   private placa  : string;
   private cor    : string;
   private modelo : string;
   private ano    : number;
   private ligado : boolean;

   public getPlaca():string{
       return this.placa;
   }

   public setPlaca(_placa: string):void{
        this.placa = _placa;
   }

   public getCor():string{
        return this.cor;
    }

    public setCor(_cor: string):void{
        this.cor = _cor;
   }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(_modelo: string):void{
        this.modelo = _modelo;
   }

    public getAno():number{
        return this.ano;
    }

    public setAno(_ano: number):void{
        if(_ano < 1900 || _ano > 2019)
        {
            console.log("Digite um ano valido");
        }
        else{
            this.ano = _ano;
        }
        
   }




    public ligar():void{
        this.ligado = true;
        
    }

    public desligar():void{
        this.ligado = false;
        
    }

    public andar(): void{
        if(this.ligado){
            console.log("O carro "+this.getModelo()+" do ano "+this.getAno()+"ta andando...");
        }
        else{
            console.log("ligue o carro");
        }
        
    }

    public parar():void{
        if(this.ligado){
            console.log(`O carro ${this.getModelo()} do ano ${this.getAno()} acabou de parar`);
        }
        else{
            console.log("ligue o carro");
        }
    }

}