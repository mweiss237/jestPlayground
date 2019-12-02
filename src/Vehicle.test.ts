import Vehicle from "./Vehicle"

var car = new Vehicle({
    color: "#CCCCFF",
    horsepower: 270,
    seats: 5,
    wheels: 4
})


test("teste das hier", () => {
    expect(car.horsepower).toBe(270)
})