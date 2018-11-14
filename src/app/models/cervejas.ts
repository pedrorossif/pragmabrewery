export class Cervejas {
    nome: string;
    max: number;
    min: number;
    constructor(nome: string, min: number, max: number) {
        this.nome = nome;
        this.max = max;
        this.min = min;
    }
    greet() {
        return "Hello, " + this.nome;
    }
}

//let greeter = new Cervejas("Pedro",5,6);