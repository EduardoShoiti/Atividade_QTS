let linguagem = "JavaScript";

Deno.test("Atividade QTS - Linguagem", () => {
    if (linguagem.toUpperCase() != "PYTHON") {
        try {
            throw new Error(`${linguagem} Não é a melhor linguagem`);
        } catch (e) {
            console.log(e.name + ": " + e.message);
        }
    }
});