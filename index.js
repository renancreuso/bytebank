import { ContaCorrente } from "./ContaCorrente.js";

const conta1 = new ContaCorrente();
conta1.cliente.nome="Renan";
conta1.cliente.cpf="793.254.788-49";
conta1.agencia = 1001;
conta1.depositar(1500);
console.log(conta1);

const conta2 = new ContaCorrente();
conta2.cliente.nome= "rebeca";
conta2.cliente.cpf="789.456.123-23";
conta2.agencia= 1001;


conta1.tranferir(200,conta2);
console.log(conta2);
console.log(conta1)