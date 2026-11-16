class LojaLivros {
    constructor(nome, proprietario) {
        this.nome = nome;
        this.proprietario = proprietario;
        this.caixa = 0;
        this.estoqueLivros = 100;
        this.estoqueCadernos = 50;
        this.estoqueCanetas = 30;
        this.estoqueMarcadores = 40;
        this.estoqueAgendas = 20;
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
            console.log("A livraria está fechada.");
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

    venderLivro() {
        if (this.estoqueLivros > 0) {
            this.estoqueLivros--;
            console.log("Livro vendido!");
        } else {
            console.log("Livros esgotados!");
        }
    }

    venderCaderno() {
        if (this.estoqueCadernos > 0) {
            this.estoqueCadernos--;
            console.log("Caderno vendido!");
        } else {
            console.log("Cadernos esgotados!");
        }
    }

    reporLivros(quantidade) {
        this.estoqueLivros += quantidade;
        console.log(`${quantidade} livros adicionados ao estoque.`);
    }

    mostrarInformacoes() {
        console.log("=== LIVRARIA ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Proprietário: ${this.proprietario}`);
        console.log(`Caixa: R$ ${this.caixa.toFixed(2)}`);
        console.log(`Estoque de livros: ${this.estoqueLivros}`);
        console.log(`Estoque de cadernos: ${this.estoqueCadernos}`);
        console.log(`Estoque de canetas: ${this.estoqueCanetas}`);
        console.log(`Estoque de marcadores: ${this.estoqueMarcadores}`);
        console.log(`Estoque de agendas: ${this.estoqueAgendas}`);
        console.log(`Clientes: ${this.clientes.length}`);
        console.log(`Funcionários: ${this.funcionarios.length}`);
        console.log(`Pedidos: ${this.pedidos.length}`);
        console.log(`Aberta: ${this.aberta}`);
    }
}

module.exports = LojaLivros;
