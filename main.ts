input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.LogoUp, function () {
    total = number + number
    basic.showNumber(total)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.LogoDown, function () {
    total = number - number
    basic.showNumber(total)
})
let total = 0
let number = 0
number = 0
