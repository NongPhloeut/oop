import { TucTuc } from "./TucTuc";
import { BatMobile } from "./BatMobile";
import { MiniVan } from "./Minivan";
import { VehicleConvoy } from "./VihicleConvoy";


let tuctuc = new TucTuc("01", 200, 10)
// console.log(tuctuc);

// console.log(tuctuc.getSpeed())

let batman1 = new BatMobile(false,"1A",100);
// console.log(batman1.getSpeed());

// let batman2 = new BatMobile(true,"1A",100);
// console.log(batman2);

let myminivan = new MiniVan("A01", 100, 2, 4);
// console.log(myminivan);

// console.log(myminivan.getSpeed());

let convoy = new VehicleConvoy();
convoy.addVehicle(tuctuc);
convoy.addVehicle(batman1);
convoy.addVehicle(myminivan);
// console.log(convoy);

console.log(convoy.getMaxSpeed());


