function LED_loop () {
    while (remainingButtonPresses > 0) {
        for (let index = 0; index <= 9; index++) {
            light.setPixelColor(index, 0xff0000)
            pause(randint(25, 150))
            if (input.buttonA.isPressed()) {
                if (index == 2) {
                    console.log("\"Button A correct!\"")
                    music.pewPew.play()
                    light.showAnimation(light.rainbowAnimation, 1000)
                    light.setAll(0xffffff)
                    remainingButtonPresses += 1
                    correctButtonPresses += 1
                } else {
                    console.log("\"Button A incorrect!\"")
                    music.pewPew.play()
                    light.setAll(0xffffff)
                    pause(500)
                }
                remainingButtonPresses += -1
                break;
            }
            light.setPixelColor(index, 0xffffff)
        }
    }
    continueGame = false
}
function show_result (correct_presses: number) {
    console.logValue("Your Score", correct_presses)
    for (let index_2 = 0; index_2 <= 9; index_2++) {
        if (0 > 0) {
            light.setPixelColor(index_2, 0x00ff00)
            correct_presses += -1
        }
    }
    pause(5000)
    light.setAll(0xffffff)
}
let correct_presses = 0
let continueGame = false
let remainingButtonPresses = 0
remainingButtonPresses = 10
let correctButtonPresses = 0
continueGame = true
forever(function () {
    if (continueGame == true) {
        LED_loop()
    } else {
        show_result(correctButtonPresses)
        remainingButtonPresses = 10
        correctButtonPresses = 0
        continueGame = true
    }
})
