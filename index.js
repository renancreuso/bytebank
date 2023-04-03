import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const conta1 = new ContaCorrente();
const cliente1 = new Cliente;
cliente1.nome ="renan";
cliente1.cpf ="174.258.963-49";
conta1.cliente = cliente1;
conta1.agencia = 1001;
conta1.depositar(1500);


const cliente2 = new Cliente;
cliente2.nome= "rebeca";
cliente2.cpf="789.456.123-23";
const conta2 = new ContaCorrente();
conta2._cliente = cliente2;
conta2.agencia= 1001;



conta1.tranferir(200,conta2);
console.log(conta2);
console.log(conta1._saldo)