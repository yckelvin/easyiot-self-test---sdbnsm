microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(0, "MQTT Received " + message)
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
        microIoT.microIoT_showUserText(2, "Smile")
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
        microIoT.microIoT_showUserText(2, "Sad")
    } else if (message == "door open") {
        basic.showIcon(IconNames.Square)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 2)
    } else if (message == "door close") {
        basic.showIcon(IconNames.SmallSquare)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    }
})
input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_showUserText(0, "Wifi: " + wifi_name)
    microIoT.microIoT_showUserText(1, "Password: " + password)
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_clear()
})
let password = ""
let wifi_name = ""
microIoT.microIoT_initDisplay()
wifi_name = "SDBNSM_DT Room"
password = "sdbnsmss"
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"",
microIoT.SERVERS.English
)
basic.forever(function () {
    microIoT.microIoT_SendMessage(convertToText(input.lightLevel()), microIoT.TOPIC.topic_0)
    basic.pause(5000)
})
