"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleConvoy = void 0;
var VehicleConvoy = /** @class */ (function () {
    function VehicleConvoy() {
        this.vechicles = [];
    }
    VehicleConvoy.prototype.addVehicle = function (vechicle) {
        this.vechicles.push(vechicle);
    };
    VehicleConvoy.prototype.getMaxSpeed = function () {
        this.vechicles.forEach(function (element) {
            console.log(element);
        });
    };
    return VehicleConvoy;
}());
exports.VehicleConvoy = VehicleConvoy;
