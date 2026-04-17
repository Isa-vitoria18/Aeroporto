class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100;
    }
}
getlerCombustivel();
return `O tanque do voo ${this.#codigo} está em ${this.#combustivel}%`;

setabastecer(quantidade);
if (quantidade < 0) {
    console.log("Erro de segurança: Não é possível tirar combustível!");
} else if (this.#combustivel + quantidade > 100) {
    console.log("Erro: O tanque vai transbordar! Limite é 100%.");
} else {
    this.#combustivel += quantidade;
    console.log(`Abastecimento concluído. Novo nível: ${this.#combustivel}%`);
}

let vooVip = new VooSeguro("VIP-001");

vooVip, this.#combustivel = 0;

vooVip.abastecer = -50;

vooVip.abastecer = 0;

console.log(vooVip.lerCombustivel);