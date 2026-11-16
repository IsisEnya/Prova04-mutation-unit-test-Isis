class LojaCha {
    constructor(nome, proprietario) {
        this.nome = nome;
        this.proprietario = proprietario;
        this.caixa = 0;
        this.estoqueCha = 100;
        this.estoqueAcucar = 50;
        this.estoqueLeite = 30;
        this.estoqueBiscoitos = 40;
        this.estoqueBolos = 20;
        this.clientes = [];
        this.funcionarios = [];
        this.pedidos = [];
        this.aberta = false;
    }

    abrirLoja() {
        this.aberta = true;
        console.log(`${this.nome} está aberta!`);
    }

    fecharLoja() {
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
            console.log("A loja está fechada.");
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

    venderCha() {
        if (this.estoqueCha > 0) {
            this.estoqueCha--;
            console.log("Chá vendido!");
        } else {
            console.log("Chá esgotado!");
        }
    }

    venderBiscoito() {
        if (this.estoqueBiscoitos > 0) {
            this.estoqueBiscoitos--;
            console.log("Biscoito vendido!");
        } else {
            console.log("Biscoitos esgotados!");
        }
    }

    reporCha(quantidade) {
        this.estoqueCha += quantidade;
        console.log(`${quantidade} unidades de chá adicionadas ao estoque.`);
    }

    mostrarInformacoes() {
        console.log("=== LOJA DE CHÁ ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Proprietário: ${this.proprietario}`);
        console.log(`Caixa: R$ ${this.caixa.toFixed(2)}`);
        console.log(`Estoque de chá: ${this.estoqueCha}`);
        console.log(`Estoque de açúcar: ${this.estoqueAcucar}`);
        console.log(`Estoque de leite: ${this.estoqueLeite}`);
        console.log(`Estoque de biscoitos: ${this.estoqueBiscoitos}`);
        console.log(`Estoque de bolos: ${this.estoqueBolos}`);
        console.log(`Clientes: ${this.clientes.length}`);
        console.log(`Funcionários: ${this.funcionarios.length}`);
        console.log(`Pedidos: ${this.pedidos.length}`);
        console.log(`Aberta: ${this.aberta}`);
    }
}

module.exports = LojaCha;
