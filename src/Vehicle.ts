interface vehicleSettings {
    seats: number,
    wheels: number,
    horsepower: number,
    color: string
}

export default class Vehicle {

    public seats: number
    public wheels: number
    public horsepower: number
    public color: string
    private fuelLevel: number

    constructor(settings: vehicleSettings) {
        for (var setting in settings) {
            this[setting] = settings[setting]
        }
    }

    public refuel(percentage: number) {
        var totalLevel = this.fuelLevel + percentage
        this.fuelLevel = totalLevel > 100 ? 100 : totalLevel;
        console.log("Tank is " + this.fuelLevel + "% filled up.")
        if (totalLevel > 100) console.log("Fuel spilled on the ground!")
    }

}

// var myCarSettings: vehicleSettings = {
//     seats: 5,
//     wheels: 4,
//     horsepower: 270,
//     color: '#CCCCFF'
// }
// var myCar = new Vehicle(myCarSettings)

