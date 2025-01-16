def on_ir_button_up_released():
    maqueenPlusV2.control_motor_stop(maqueenPlusV2.MyEnumMotor.ALL_MOTOR)
makerbit.on_ir_button(IrButton.UP,
    IrButtonAction.RELEASED,
    on_ir_button_up_released)

def on_ir_button_down_pressed():
    maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.ALL_MOTOR,
        maqueenPlusV2.MyEnumDir.BACKWARD,
        45)
makerbit.on_ir_button(IrButton.DOWN,
    IrButtonAction.PRESSED,
    on_ir_button_down_pressed)

def on_ir_button_down_released():
    maqueenPlusV2.control_motor_stop(maqueenPlusV2.MyEnumMotor.ALL_MOTOR)
makerbit.on_ir_button(IrButton.DOWN,
    IrButtonAction.RELEASED,
    on_ir_button_down_released)

def on_ir_button_up_pressed():
    maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.ALL_MOTOR,
        maqueenPlusV2.MyEnumDir.FORWARD,
        45)
makerbit.on_ir_button(IrButton.UP, IrButtonAction.PRESSED, on_ir_button_up_pressed)

def on_ir_button_ok_pressed():
    pass
makerbit.on_ir_button(IrButton.OK, IrButtonAction.PRESSED, on_ir_button_ok_pressed)

basic.show_leds("""
    . . . . #
    # # # . .
    . # . # .
    # # # . .
    . . . . #
    """)
basic.pause(100)
basic.show_leds("""
    . . . . #
    # # # . .
    # . . # .
    # # # . .
    . . . . #
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    # # # . #
    # . . # .
    # # # . .
    . . . . #
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    # # # . #
    # . . # .
    # # # . #
    . . . . .
    """)
basic.pause(200)
basic.show_leds("""
    # # # # #
    # # # . #
    # . . # .
    # # # . #
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    # # # # #
    # # # # #
    # . . # .
    # # # . #
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # . #
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
basic.pause(200)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.pause(200)
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)
basic.pause(1000)
basic.show_string("Hi!")
basic.pause(200)
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)

def on_forever():
    pass
basic.forever(on_forever)
