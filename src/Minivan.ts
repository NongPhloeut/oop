import {Vehicle} from "./Vehicle";
export class MiniVan extends Vehicle{
   
    numberCustomer: number;
    numberLuggages: number;
    constructor(plateID:string,weight:number, numberCustomer: number, numberLuggage: number){
        super(plateID,weight);
        this.numberCustomer = numberCustomer;
        this.numberLuggages = numberLuggage;
    } 
    // getSpeed(): void {
    //     throw new Error("Method not implemented.");
        
    // }
    getSpeed(): number {
        let speed = 130;
        let decreased = 0;
        let passenger = this.numberCustomer * 10;
        let luggage = this.numberLuggages * 5;
        if (decreased < speed){
            decreased = speed - passenger;
        }
        else if(decreased < speed){
            decreased = speed - luggage;
        }
        return decreased;

    }
}