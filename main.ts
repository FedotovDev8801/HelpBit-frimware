enum RadioMessage {
    message1 = 49434,
    sosSignal = 40523
}
radio.onReceivedMessage(RadioMessage.sosSignal, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 360), music.PlaybackMode.InBackground)
    basic.showString("I recieved a SOS signal! Someone needs help!")
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 45)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 45)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # # .
        # . # # #
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let secondsFromStart = 0
basic.showLeds(`
    . . . . #
    # # # . .
    . # . # .
    # # # . .
    . . . . #
    `)
basic.pause(100)
basic.showLeds(`
    . . . . #
    # # # . .
    # . . # .
    # # # . .
    . . . . #
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    # # # . #
    # . . # .
    # # # . .
    . . . . #
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    # # # . #
    # . . # .
    # # # . #
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    # # # # #
    # # # . #
    # . . # .
    # # # . #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # # # # #
    # # # # #
    # . . # .
    # # # . #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # . #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.showString("Hi!")
basic.pause(200)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    datalogger.log(datalogger.createCV("startingSeconds", 1))
    secondsFromStart += 1
    basic.pause(1000)
})
