import { TucTuc } from "./TucTuc";
import { BatMobile } from "./BatMobile";
import { MiniVan } from "./Minivan";


let TucTuc01 = new TucTuc("01", 200, 10)
console.log(TucTuc01.getSpeed())

let batman1 = new BatMobile(false,"1A",100);
console.log(batman1.getSpeed());


let myminivan = new MiniVan("A01", 100, 2, 4);
console.log(myminivan.getSpeed());
let batman2 = new BatMobile(true,"1A",100);
console.log(batman2);
