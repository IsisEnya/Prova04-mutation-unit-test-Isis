const LojaCha = require('../src/lojaCha');

describe("Testes da classe LojaCha", () => {

    test("Deve criar uma loja corretamente", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        expect(loja.nome).toBe("Chá Maluco");
        expect(loja.proprietario).toBe("Alice");
        expect(loja.caixa).toBe(0);
        expect(loja.estoqueCha).toBe(100);
        expect(loja.estoqueAcucar).toBe(50);
        expect(loja.estoqueLeite).toBe(30);
        expect(loja.estoqueBiscoitos).toBe(40);
        expect(loja.estoqueBolos).toBe(20);
        expect(loja.aberta).toBe(false);
    });

    test("Deve abrir a loja", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.abrirLoja();

        expect(loja.aberta).toBe(true);
    });

    test("Deve fechar a loja", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.abrirLoja();
        loja.fecharLoja();

        expect(loja.aberta).toBe(false);
    });

    test("Deve adicionar um cliente", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.adicionarCliente("João");

        expect(loja.clientes).toContain("João");
        expect(loja.clientes.length).toBe(1);
    });

    test("Deve adicionar um funcionário", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.adicionarFuncionario("Maria");

        expect(loja.funcionarios).toContain("Maria");
        expect(loja.funcionarios.length).toBe(1);
    });

    test("Deve realizar um pedido com a loja aberta", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.abrirLoja();
        loja.fazerPedido("João", "Chá Verde", 15);

        expect(loja.pedidos.length).toBe(1);
        expect(loja.pedidos[0].cliente).toBe("João");
        expect(loja.pedidos[0].produto).toBe("Chá Verde");
        expect(loja.pedidos[0].preco).toBe(15);
        expect(loja.caixa).toBe(15);
    });

    test("Não deve realizar pedido com a loja fechada", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.fazerPedido("João", "Chá Verde", 15);

        expect(loja.pedidos.length).toBe(0);
        expect(loja.caixa).toBe(0);
    });

    test("Deve vender um chá e diminuir o estoque", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.venderCha();

        expect(loja.estoqueCha).toBe(99);
    });

    test("Não deve vender chá quando o estoque estiver zerado", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.estoqueCha = 0;
        loja.venderCha();

        expect(loja.estoqueCha).toBe(0);
    });

    test("Deve vender um biscoito e diminuir o estoque", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.venderBiscoito();

        expect(loja.estoqueBiscoitos).toBe(39);
    });

    test("Não deve vender biscoito quando o estoque estiver zerado", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.estoqueBiscoitos = 0;
        loja.venderBiscoito();

        expect(loja.estoqueBiscoitos).toBe(0);
    });

    test("Deve repor o estoque de chá", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        loja.reporCha(20);

        expect(loja.estoqueCha).toBe(120);
    });

    test("Deve mostrar as informações da loja", () => {
        const loja = new LojaCha("Chá Maluco", "Alice");

        const consoleSpy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        loja.mostrarInformacoes();

        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith("=== LOJA DE CHÁ ===");

        consoleSpy.mockRestore();
    });
});

