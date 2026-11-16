const Cafeteria = require('../src/cafeteria');

describe('Testes da classe Cafeteria', () => {

    let cafeteria;

    beforeEach(() => {
        cafeteria = new Cafeteria('Café do Zé', 'Rua Principal, 123');
    });

    test('deve criar uma cafeteria corretamente', () => {
        expect(cafeteria.nome).toBe('Café do Zé');
        expect(cafeteria.endereco).toBe('Rua Principal, 123');
        expect(cafeteria.caixa).toBe(0);
        expect(cafeteria.aberta).toBe(false);
    });

    test('deve abrir a cafeteria', () => {
        cafeteria.abrir();

        expect(cafeteria.aberta).toBe(true);
    });

    test('deve fechar a cafeteria', () => {
        cafeteria.abrir();
        cafeteria.fechar();

        expect(cafeteria.aberta).toBe(false);
    });

    test('deve adicionar um cliente', () => {
        cafeteria.adicionarCliente('João');

        expect(cafeteria.clientes).toContain('João');
        expect(cafeteria.clientes.length).toBe(1);
    });

    test('deve adicionar um funcionário', () => {
        cafeteria.adicionarFuncionario('Maria');

        expect(cafeteria.funcionarios).toContain('Maria');
    });

    test('deve realizar um pedido', () => {
        cafeteria.abrir();

        cafeteria.fazerPedido('João', 'Café', 5);

        expect(cafeteria.pedidos.length).toBe(1);
        expect(cafeteria.pedidos[0].cliente).toBe('João');
        expect(cafeteria.pedidos[0].produto).toBe('Café');
        expect(cafeteria.pedidos[0].preco).toBe(5);
    });

    test('deve adicionar o valor do pedido ao caixa', () => {
        cafeteria.abrir();

        cafeteria.fazerPedido('João', 'Café', 5);
        cafeteria.fazerPedido('Maria', 'Bolo', 10);

        expect(cafeteria.caixa).toBe(15);
    });

    test('não deve realizar pedido com a cafeteria fechada', () => {
        cafeteria.fazerPedido('João', 'Café', 5);

        expect(cafeteria.pedidos.length).toBe(0);
        expect(cafeteria.caixa).toBe(0);
    });

    test('deve vender café e diminuir o estoque', () => {
        const estoqueInicial = cafeteria.estoqueCafe;

        cafeteria.venderCafe();

        expect(cafeteria.estoqueCafe).toBe(estoqueInicial - 1);
    });

    test('deve vender pão e diminuir o estoque', () => {
        const estoqueInicial = cafeteria.estoquePaes;

        cafeteria.venderPao();

        expect(cafeteria.estoquePaes).toBe(estoqueInicial - 1);
    });

    test('deve vender bolo e diminuir o estoque', () => {
        const estoqueInicial = cafeteria.estoqueBolos;

        cafeteria.venderBolo();

        expect(cafeteria.estoqueBolos).toBe(estoqueInicial - 1);
    });

    test('deve repor café', () => {
        cafeteria.reporCafe(20);

        expect(cafeteria.estoqueCafe).toBe(120);
    });

    test('deve repor leite', () => {
        cafeteria.reporLeite(20);

        expect(cafeteria.estoqueLeite).toBe(70);
    });

    test('deve repor açúcar', () => {
        cafeteria.reporAcucar(20);

        expect(cafeteria.estoqueAcucar).toBe(70);
    });

    test('deve repor pães', () => {
        cafeteria.reporPaes(10);

        expect(cafeteria.estoquePaes).toBe(40);
    });

    test('deve repor bolos', () => {
        cafeteria.reporBolos(5);

        expect(cafeteria.estoqueBolos).toBe(15);
    });

    test('deve armazenar vários clientes', () => {
        cafeteria.adicionarCliente('João');
        cafeteria.adicionarCliente('Maria');
        cafeteria.adicionarCliente('Pedro');

        expect(cafeteria.clientes.length).toBe(3);
    });

    test('deve armazenar vários funcionários', () => {
        cafeteria.adicionarFuncionario('Maria');
        cafeteria.adicionarFuncionario('Carlos');

        expect(cafeteria.funcionarios.length).toBe(2);
    });

    test('deve armazenar vários pedidos', () => {
        cafeteria.abrir();

        cafeteria.fazerPedido('João', 'Café', 5);
        cafeteria.fazerPedido('Maria', 'Bolo', 10);
        cafeteria.fazerPedido('Pedro', 'Pão', 4);

        expect(cafeteria.pedidos.length).toBe(3);
    });

    test('deve calcular corretamente o caixa com vários pedidos', () => {
        cafeteria.abrir();

        cafeteria.fazerPedido('João', 'Café', 5);
        cafeteria.fazerPedido('Maria', 'Bolo', 10);
        cafeteria.fazerPedido('Pedro', 'Pão', 4);

        expect(cafeteria.caixa).toBe(19);
    });

    test('deve diminuir o estoque de café várias vezes', () => {
        cafeteria.venderCafe();
        cafeteria.venderCafe();
        cafeteria.venderCafe();

        expect(cafeteria.estoqueCafe).toBe(97);
    });

});