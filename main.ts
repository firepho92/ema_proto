let windDirection = ""
let windSpeed = 0
let altitude = 0
let pressure = 0
let humidity = 0
let temperature = 0
let latitude = 19.5477783
let longitude = -96.9435822
let json = ""
//serial.redirect(SerialPin.P15, SerialPin.P14, 115200)
serial.redirectToUSB()
weatherbit.startWeatherMonitoring()

basic.forever( () => {
    //serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () { this line wait s for a signal to trigger function
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
        basic.showString("CCTA")
        basic.clearScreen()
        pause(10670)
    //})
})

