import { Vehicle } from "./Vehicle";

export class BatMobile extends Vehicle {
    isBatmanHere:boolean;
    constructor(isBatman:boolean,plateID:string,weight:number) {
        super(plateID,weight)
        this.isBatmanHere = isBatman;
    }
}