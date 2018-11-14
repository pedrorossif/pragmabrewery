import { Cervejas } from "./cervejas";

export class Containers {
    id: number;
    cerveja: Cervejas;
    tempAtual: number;
    tempStatus: string;
    
    constructor(id: number, cerveja: Cervejas, tempAtual: number, tempStatus: string){
        this.id = id;
        this.cerveja = cerveja;
        this.tempAtual = tempAtual;
        this.tempStatus = tempStatus;
    }
}