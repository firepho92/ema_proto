/**
 * serial.redirect(
 * 
 * SerialPin.P15,
 * 
 * SerialPin.P14,
 * 
 * BaudRate.BaudRate9600
 * 
 * )
 */
let windDirection = ""
let windSpeed = 0
let altitude = 0
let pressure = 0
let humidity = 0
let temperature = 0
let signal = ""
weatherbit.startWeatherMonitoring()
serial.redirectToUSB()
basic.forever(function () {
    signal = serial.readLine()
    temperature = weatherbit.temperature() / 100
    humidity = weatherbit.humidity() / 1024
    pressure = weatherbit.pressure() / 25600
    altitude = weatherbit.altitude()
    windSpeed = weatherbit.windSpeed()
    windDirection = weatherbit.windDirection()
    serial.writeValue("temperature:", temperature)
    serial.writeValue(",humidity:", humidity)
    serial.writeValue(",pressure:", pressure)
    serial.writeValue(",altitude:", altitude)
    serial.writeValue(",wind speed:", windSpeed)
    serial.writeString(",wind direction:" + windDirection)
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
})

