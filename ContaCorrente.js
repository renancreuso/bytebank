import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _saldo = 0;    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _cliente;
   static numeroDeContas =0;


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }   
   
    get saldo(){
        return this._saldo;
    }
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;           
    }
    tranferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    constructor(cliente,agencia){
        this.cliente= cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
        
        
    }
}
   

    