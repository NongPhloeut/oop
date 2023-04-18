import {Vehicle} from "./Vehicle";
export class MiniVan extends Vehicle{
    numberCustomer: number;
    numberLuggage: number;
    constructor(plateID:string,weight:number, numberCustomer: number, numberLuggage: number){
        super(plateID,weight);
        this.numberCustomer = numberCustomer;
        this.numberLuggage = numberLuggage;
    }
}