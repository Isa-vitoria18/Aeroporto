// Criando a classe Voo
class Voo {

    // O constructor é executado quando criamos um objeto
    constructor(codigo, origem, destino, horario) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.horario = horario;
        this.status = "Em solo"; // status inicial
    }

    // Método para decolar
    decolar() {
        this.status = "Decolando";
        console.log("O voo está decolando...");
        this.atualizarStatus();
    }

    // Método para atualizar informações na tela
    atualizarStatus() {
        document.getElementById("codigo").textContent = this.codigo;
        document.getElementById("origem").textContent = this.origem;
        document.getElementById("destino").textContent = this.destino;
        document.getElementById("horario").textContent = this.horario;
        document.getElementById("status").textContent = this.status;
    }
}

// Criando um objeto (instância) da classe
const voo = new Voo("AZ123", "São Paulo", "Rio de Janeiro", "14:30");

// Atualiza a tela quando a página carrega
voo.atualizarStatus();