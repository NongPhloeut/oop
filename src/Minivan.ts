import {Vehicle} from "./Vehicle";
export class MiniVan extends Vehicle{
   
    numberCustomer: number;
    numberLuggages: number;
    constructor(plateID:string,weight:number, numberCustomer: number, numberLuggage: number){
        super(plateID,weight);
        this.numberCustomer = numberCustomer;
        this.numberLuggages = numberLuggage;
    } 
    getSpeed(): number {

        let speed = 130;
        
        let customer =  this.numberCustomer * 10;
        let luggage = this.numberLuggages * 5;
        if(this.numberCustomer >0 && this.numberLuggages>0 && speed>0){
            speed -= customer;
            speed -= luggage;
        }
        return speed;
    }
}