import { Vehicle } from "./Vehicle";
export class TucTuc extends Vehicle{
 
    numberCustomers: number;
    constructor(plateID:string, weight:number, numberCustomers: number){
        super(plateID, weight)
        this.numberCustomers = numberCustomers
    }   
    getSpeed(): void {
        throw new Error("Method not implemented.");
    }
}