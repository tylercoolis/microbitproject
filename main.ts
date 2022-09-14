input.onButtonPressed(Button.A, function () {
    Players = Players - 1
    basic.showNumber(Players)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    basic.showString("Player ")
    basic.pause(500)
    basic.showNumber(randint(0, Players))
    basic.pause(500)
    basic.showString("Chooses")
})
input.onButtonPressed(Button.B, function () {
    Players = Players + 1
    basic.showNumber(Players)
})
input.onGesture(Gesture.TiltRight, function () {
    let list: number[] = []
    basic.pause(500)
    basic.showString("" + (list._pickRandom()))
})
let Players = 0
let text_list = [
"Food",
"Drinks",
"Dessert",
"Activities",
"Music"
]
basic.forever(function () {
	
})
