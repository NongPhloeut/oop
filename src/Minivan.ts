import {Vehicle} from "./Vehicle";
export class MiniVan extends Vehicle{
   
    numberCustomer: number;
    numberLuggages: number;
    constructor(plateID:string,weight:number, numberCustomer: number, numberLuggage: number){
        super(plateID,weight);
        this.numberCustomer = numberCustomer;
        this.numberLuggages = numberLuggage;
    } 
    getSpeed(): void {
        throw new Error("Method not implemented.");
    }
}