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
let latitude = 19.5477783
let longitude = -96.9435822
let json = ""
weatherbit.startWeatherMonitoring()

basic.forever( () => {
    //signal = serial.readLine()
    serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
        temperature = weatherbit.temperature() / 100
        humidity = weatherbit.humidity() / 1024
        pressure = weatherbit.pressure() / 25600
        altitude = weatherbit.altitude()
        windSpeed = weatherbit.windSpeed()
        windDirection = weatherbit.windDirection()
        json = '{"temperature":' + temperature + 
        ',"humidity":' + humidity + 
        ',"pressure":' + pressure + 
        ',"altitude":' + altitude + 
        ',"windSpeed":' + windSpeed + 
        ',"windDirection":"' + windDirection + 
        '","latitude":' + latitude +
        ',"longitude":' + longitude +
        '}'
        serial.writeLine(json)
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
    
    //basic.pause(2000)
})

