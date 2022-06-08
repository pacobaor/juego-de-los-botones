let Empezar_juego = false
basic.forever(function () {
    Empezar_juego = false
    basic.pause(randint(1000, 5000))
    Empezar_juego = true
    basic.showIcon(IconNames.Fabulous)
    while (Empezar_juego) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            Empezar_juego = false
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                Empezar_juego = false
            }
        }
    }
    basic.pause(3000)
    basic.clearScreen()
})
