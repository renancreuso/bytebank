export class Cliente{
    nome;
    _cpf;
    constructor(nome,cpf){
        this.nome=  nome;
        this._cpf = cpf
    }
    
    get nome(){
        return this.nome;
    }
    set nome(nome){
        this.nome = nome;
    }
    get cpf(){
        return this._cpf;
    }
  
}