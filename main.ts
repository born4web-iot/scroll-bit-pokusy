input.onButtonPressed(Button.A, function () {
    scrollbit.clear()
    scrollbit.setImage(
    images.createBigImage(`
        # . . . # # . . . #
        . # . . # # . . # .
        # . # # # # # # . #
        . . . # . . # . . .
        . . . # . . # . . .
        `),
    3,
    1,
    128
    )
    scrollbit.show()
    basic.pause(2000)
    scrollbit.clear()
})
input.onButtonPressed(Button.B, function () {
    scrollbit.clear()
    scrollbit.setImage(
    images.createBigImage(`
        . . . . # # . . . .
        . . . . # # . . . .
        # . # # # # # # . #
        . # . # . . # . # .
        # . . # . . # . . #
        `),
    3,
    1,
    128
    )
    scrollbit.show()
    basic.pause(2000)
    scrollbit.clear()
})
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    led.plot(2, 2)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
