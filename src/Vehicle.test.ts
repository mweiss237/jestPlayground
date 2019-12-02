import Vehicle from "./Vehicle"

var car = new Vehicle({
    color: "#CCCCFF",
    horsepower: 270,
    seats: 5,
    wheels: 4
})


test("Check attributes after initializing", () => {
    expect(car.horsepower).toBe(270)
    expect(car.color).toBe("#CCCCFF")
    expect(car.seats).toBe(5)
    expect(car.wheels).toBe(4)
})

test("Check starting the engine with failure", () => {
    expect(car.startEngine()).toEqual(false)    
})

test("Check refueling the tank to half", () => {
    car.refuel(50)
    expect(car.getFuelLevel()).toEqual(50)
})

test("Check refueling with a numeric string", () => {
    // @ts-ignore
    car.refuel("20")
    expect(car.getFuelLevel()).toBe(70)
})

test("Check refueling with a string", () => {
    // @ts-ignore
    car.refuel("ab")
    expect(car.getFuelLevel()).toBe(70)
})

test("Check starting the engine with success", () => {
    expect(car.startEngine()).toEqual(true)    
})

test("Crashing the car", () => {
    car.crash()
    expect(car.startEngine()).toEqual(false)
})