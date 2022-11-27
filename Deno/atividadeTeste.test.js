let nome = "Eduardo";
let idade = 18;

Deno.test("Atividade QTS - nome", () => {
    if (nome.toUpperCase().includes("A")) { 
        try {
            throw new Error(`${nome} - possui a letra A`);
        } catch (e) {
            console.log(e.name + ": " + e.message);
        }
    }
})

Deno.test("Atividade QTS - idade", () => {
    if (idade < 18) {
        try {
            throw new Error(`Menor de Idade`);
        } catch (e) {
            console.log(e.name + ": " + e.message);
        }
    }
})