const LojaLivros = require("../src/lojaLivros");

describe("Testes da classe LojaLivros", () => {
    test("Deve criar uma livraria corretamente", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        expect(loja.nome).toBe("Livraria Central");
        expect(loja.proprietario).toBe("Ana");
        expect(loja.caixa).toBe(0);
        expect(loja.estoqueLivros).toBe(100);
        expect(loja.estoqueCadernos).toBe(50);
        expect(loja.estoqueCanetas).toBe(30);
        expect(loja.estoqueMarcadores).toBe(40);
        expect(loja.estoqueAgendas).toBe(20);
        expect(loja.aberta).toBe(false);
    });

    test("Deve abrir e fechar a loja", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        loja.abrirLoja();
        expect(loja.aberta).toBe(true);

        loja.fecharLoja();
        expect(loja.aberta).toBe(false);
    });

    test("Deve adicionar clientes e funcionários", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        loja.adicionarCliente("João");
        loja.adicionarFuncionario("Maria");

        expect(loja.clientes).toContain("João");
        expect(loja.funcionarios).toContain("Maria");
    });

    test("Deve registrar um pedido quando a loja estiver aberta", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        loja.abrirLoja();
        loja.fazerPedido("João", "Livro de aventuras", 25);

        expect(loja.pedidos).toEqual([
            { cliente: "João", produto: "Livro de aventuras", preco: 25 }
        ]);
        expect(loja.caixa).toBe(25);
    });

    test("Não deve registrar pedido quando a loja estiver fechada", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        loja.fazerPedido("João", "Livro de aventuras", 25);

        expect(loja.pedidos).toHaveLength(0);
        expect(loja.caixa).toBe(0);
    });

    test("Deve vender livros e cadernos enquanto houver estoque", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        loja.venderLivro();
        loja.venderCaderno();

        expect(loja.estoqueLivros).toBe(99);
        expect(loja.estoqueCadernos).toBe(49);
    });

    test("Não deve diminuir o estoque de produtos esgotados", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");
        loja.estoqueLivros = 0;
        loja.estoqueCadernos = 0;

        loja.venderLivro();
        loja.venderCaderno();

        expect(loja.estoqueLivros).toBe(0);
        expect(loja.estoqueCadernos).toBe(0);
    });

    test("Deve repor o estoque de livros", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");

        loja.reporLivros(15);

        expect(loja.estoqueLivros).toBe(115);
    });

    test("Deve mostrar as informações da livraria", () => {
        const loja = new LojaLivros("Livraria Central", "Ana");
        const consoleSpy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        loja.mostrarInformacoes();

        expect(consoleSpy).toHaveBeenCalledWith("=== LIVRARIA ===");
        consoleSpy.mockRestore();
    });
});
