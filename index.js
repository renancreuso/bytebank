import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("renan", "789.456.123-49");
const conta1 = new ContaCorrente(cliente1,1001);
conta1.depositar(1500);


const cliente2 = new Cliente("rebeca","852.147.963-49");
const conta2 = new ContaCorrente(cliente2,1002);

conta1.tranferir(200,conta2);
console.log(conta1)
console.log(conta2);
console.log(`${ContaCorrente.numeroDeContas} contas registradas.`);