let start_time = 0
let stop_time = 0
let reaction_time = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    stop_time = input.runningTime()
    reaction_time = stop_time - start_time
    reaction_time = reaction_time / 10
    basic.showNumber(Math.round(reaction_time))
})
