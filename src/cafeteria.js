class Cafeteria {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.caixa = 0;
        this.estoqueCafe = 100;
        this.estoqueLeite = 50;
        this.estoqueAcucar = 50;
        this.estoquePaes = 30;
        this.estoqueBolos = 10;
        this.clientes = [];
        this.pedidos = [];
        this.funcionarios = [];
        this.aberta = false;
    }

    abrir() {
        this.aberta = true;
        console.log(`${this.nome} está aberta!`);
    }

    fechar() {
        this.aberta = false;
        console.log(`${this.nome} está fechada!`);
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    fazerPedido(cliente, produto, preco) {
        if (!this.aberta) {
            console.log("A cafeteria está fechada.");
            return;
        }

        const pedido = {
            cliente: cliente,
            produto: produto,
            preco: preco
        };

        this.pedidos.push(pedido);
        this.caixa += preco;

        console.log(`Pedido de ${produto} realizado por ${cliente}.`);
    }

    venderCafe() {
        if (this.estoqueCafe > 0) {
            this.estoqueCafe--;
            console.log("Café vendido!");
        } else {
            console.log("Sem café no estoque.");
        }
    }

    venderPao() {
        if (this.estoquePaes > 0) {
            this.estoquePaes--;
            console.log("Pão vendido!");
        } else {
            console.log("Sem pão no estoque.");
        }
    }

    venderBolo() {
        if (this.estoqueBolos > 0) {
            this.estoqueBolos--;
            console.log("Bolo vendido!");
        } else {
            console.log("Sem bolo no estoque.");
        }
    }

    reporCafe(quantidade) {
        this.estoqueCafe += quantidade;
    }

    reporLeite(quantidade) {
        this.estoqueLeite += quantidade;
    }

    reporAcucar(quantidade) {
        this.estoqueAcucar += quantidade;
    }

    reporPaes(quantidade) {
        this.estoquePaes += quantidade;
    }

    reporBolos(quantidade) {
        this.estoqueBolos += quantidade;
    }

    mostrarEstoque() {
        console.log("=== ESTOQUE ===");
        console.log("Café:", this.estoqueCafe);
        console.log("Leite:", this.estoqueLeite);
        console.log("Açúcar:", this.estoqueAcucar);
        console.log("Pães:", this.estoquePaes);
        console.log("Bolos:", this.estoqueBolos);
    }

    mostrarClientes() {
        console.log("Clientes:", this.clientes);
    }

    mostrarFuncionarios() {
        console.log("Funcionários:", this.funcionarios);
    }

    mostrarPedidos() {
        console.log("Pedidos:", this.pedidos);
    }

    mostrarCaixa() {
        console.log(`Caixa: R$ ${this.caixa.toFixed(2)}`);
    }
}

module.exports = Cafeteria;

const cafeteria = new Cafeteria(
    "Café do Zé",
    "Rua Principal, 123"
);

cafeteria.abrir();

cafeteria.adicionarCliente("João");
cafeteria.adicionarFuncionario("Maria");

cafeteria.fazerPedido("João", "Café", 5.00);
cafeteria.venderCafe();

cafeteria.mostrarEstoque();
cafeteria.mostrarCaixa();