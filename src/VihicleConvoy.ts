import { Vehicle } from "./Vehicle";

export class VehicleConvoy {
    vehicles:Vehicle[]=[];

    addVehicle(vechicle:Vehicle) {
      return  this.vehicles.push(vechicle);
    }

    getMaxSpeed(): number {
        let firstSpeed = this.vehicles[0].getSpeed();

        this.vehicles.forEach(element => {
            if(element.getSpeed() < firstSpeed){
               firstSpeed = element.getSpeed();
            }
            
        });
        
        return firstSpeed;
    }



}