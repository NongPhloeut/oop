import { BatMobile } from "./BatMobile";
import { MiniVan } from "./Minivan";
import { TucTuc } from "./TucTuc";
import { Vehicle } from "./Vehicle";

export class VehicleConvoy {
    vechicles:Vehicle[]=[];
    addVehicle(vechicle:Vehicle) {
      return  this.vechicles.push(vechicle);
    }

    getMaxSpeed(): void {
        let firstSpeed = this.vechicles[0].getSpeed();

        this.vechicles.forEach(element => {
            if(element.getSpeed() > firstSpeed){
               firstSpeed = element.getSpeed();
            }
            
        });
        
        return firstSpeed;
    }
}