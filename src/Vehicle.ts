interface vehicleSettings {
    seats: number,
    wheels: number,
    horsepower: number,
    color: string
}

class Vehicle {

    public seats: number
    public wheels: number
    public horsepower: number
    public color: string
    private crashed: boolean = false
    private fuelLevel: number = 0

    constructor(settings: vehicleSettings) {
        for (let setting in settings) {
            this[setting] = settings[setting]
        }
    }

    public refuel(percentage: number): void {
        let totalLevel = this.fuelLevel + (+percentage || 0)
        this.fuelLevel = totalLevel > 100 ? 100 : totalLevel
        console.log("Tank is " + this.fuelLevel + "% filled up.")
        if (totalLevel > 100) console.log("Fuel spilled on the ground!")
    }

    public getFuelLevel(): number {
        return this.fuelLevel
    }

    public crash(): void {
        if(!this.crashed) {
            this.wheels = this.wheels - 1
            this.crashed = true
        } 
    }

    public repair(): void {
        this.wheels = 4
        this.crashed = false
    }

    public startEngine(): boolean {
        return !(this.fuelLevel == 0 || this.crashed) 
    }
}

export default Vehicle