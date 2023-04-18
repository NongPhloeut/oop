import { Vehicle } from "./Vehicle";
export class TucTuc extends Vehicle{
 
    numberCustomers: number;
    constructor(plateID:string, weight:number, numberCustomers: number){
        super(plateID, weight)
        this.numberCustomers = numberCustomers
    }   
    getSpeed(): number {
        let remainSpeed = 0;
        let maxSpeed = 130;
        let passenger = this.numberCustomers * 5;
        if(passenger < maxSpeed){
            remainSpeed = maxSpeed - passenger;
        }
        return remainSpeed;
        
        
    }
}