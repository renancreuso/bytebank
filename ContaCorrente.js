import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _saldo = 0;    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    cliente = new Cliente();

    
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
}