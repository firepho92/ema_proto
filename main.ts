weatherbit.startWeatherMonitoring()
basic.forever(function () {
    let signal: string = serial.readLine()
    let temperature: number = weatherbit.temperature() / 100
    let humidity: number = weatherbit.humidity() / 1024
    let pressure: number = weatherbit.pressure() / 25600
    let altitude: number = weatherbit.altitude()
    serial.writeValue("temperature", temperature)
    serial.writeValue("humidity", humidity)
    serial.writeValue("pressure", pressure)
    serial.writeValue("altitude", altitude)
    led.setBrightness(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(1000)
})
serial.redirectToUSB()
/*serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)*/