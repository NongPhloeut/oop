import { Vehicle } from "./Vehicle";

export class BatMobile extends Vehicle {
   
    isBatmanHere:boolean;
    constructor(isBatman:boolean,plateID:string,weight:number) {
        super(plateID,weight)
        this.isBatmanHere = isBatman;
    } 
    getSpeed(): number {
        let speed = 0;
        if(this.isBatmanHere){
            speed = 500;
        }else{
            speed = 110;
        }
        return speed;
    }
}